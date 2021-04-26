import { NextApiRequest, NextApiResponse } from 'next';

import MongooseConnect from 'middleware/mongoose.middleware';
import PaytmPayment from 'models/paytmPayment.model';
import { APIError, __ } from 'helpers/errors';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const error = APIError(res);

    try {
        const { orderId } = req.query;
        const transaction = await PaytmPayment.findOne({ orderId });
        if (transaction) return res.json({ status: transaction.status });
        else return error(__.INVALID_ORDER_ID);
    } catch (e) {
        error(__.UNKNOWN_ERROR_OCCURRED);
    }
}

export default MongooseConnect(handler);
