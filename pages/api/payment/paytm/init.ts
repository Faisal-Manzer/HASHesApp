import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import ShortUniqueId from 'short-unique-id';
import axios from 'axios';

import MongooseConnect from 'middleware/mongoose';
import { APIError, __ } from 'helpers/errors';
import PaytmPayment from 'models/paytmPayment';
import PaytmChecksum from 'helpers/PaytmChecksum';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const error = APIError(res);
    try {
        const uniqueId = new ShortUniqueId();

        const { amount, type = 'DONATE' } = req.body;
        if (!amount) return error(__.INVALID_AMOUNT_ERROR);

        const session = await getSession({ req });
        if (!session) return error(__.LOGIN_REQUIRED);

        const { user: { uid } } = session;
        const mid = process.env.PAYTM_MID;

        const orderId = uniqueId();

        const payload = {
            requestType: 'Payment',
            mid,
            websiteName: process.env.PAYTM_WEBSITE,
            orderId: orderId,
            callbackUrl: `${process.env.API_BASE_URL}/payment/paytm/callback/`,
            txnAmount: {
                value: String(amount),
                currency: 'INR',
            },
            userInfo: {
                custId: uid,
            },
        };

        const signature = await PaytmChecksum.generateSignature(JSON.stringify(payload), process.env.PAYTM_KEY);
        const postData = JSON.stringify({
            body: payload,
            head: { signature }
        });
        const response = await axios.post(
            `${process.env.PAYTM_URI}/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderId}`,
            postData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': postData.length
                }
            }
        );
        const { data: { body: { txnToken, resultInfo: { resultStatus } } } } = response;
        if (resultStatus === 'S') {
            const transaction = new PaytmPayment({ user: uid, amount, orderId, txnToken, type });
            const transactionResponse = await transaction.save();
            res.json(transactionResponse);
        } else {
            error(__.UNKNOWN_ERROR_OCCURRED);
        }

    } catch (e) {
        console.log(e);
        error(__.UNKNOWN_ERROR_OCCURRED);
    }
};


export default MongooseConnect(handler);
