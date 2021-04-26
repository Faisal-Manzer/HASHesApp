import { NextApiRequest, NextApiResponse } from 'next';

import MongooseConnect from 'middleware/mongoose.middleware';
import PaytmPayment from 'models/paytmPayment.model';
import PaytmChecksum from 'helpers/payment/paytmChecksum.payment.helper';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { ORDERID = 'invalid-id', STATUS = 'PENDING' } = req.body;

    try {
        const body = req.body;

        const transaction = await PaytmPayment.findOne({ orderId: ORDERID });
        if (transaction) {
            const paytmParams = {};
            let paytmChecksum = '';
            for (const key in body) {
                if (key == 'CHECKSUMHASH') paytmChecksum = body[key];
                else paytmParams[key] = body[key];
            }

            const verified = await PaytmChecksum.verifySignature(paytmParams, process.env.PAYTM_KEY, paytmChecksum);

            if (verified) {
                switch (STATUS) {
                    case 'TXN_SUCCESS':
                        transaction.status = 'SUCCESS';
                        break;
                    case 'TXN_FAILURE':
                        transaction.status = 'FAILURE';
                        break;
                    case 'PENDING':
                        transaction.status = 'PENDING';
                        break;
                }

                transaction.callBackData = body;
                await transaction.save();
            }
        }
    } catch (e) {
        console.log(e);
    }

    res.redirect(`/transaction/status/paytm/${ORDERID}/`);
};


export default MongooseConnect(handler);
