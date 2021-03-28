import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const PaytmPaymentDetail = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    amount: { type: Number, required: true },
    orderId: { type: String, required: true },
    txnToken: { type: String },
    status: { type: String, default: 'PENDING', enum: ['PENDING', 'SUCCESS', 'FAILURE'] },
    type: { type: String, default: 'DONATE', enum: ['DONATE', 'MEMBERSHIP_FEE'] },
    callBackData: { type: Schema.Types.Mixed }
}, { timestamps: true });

export default mongoose.models.paytmPaymentDetail || mongoose.model('paytmPaymentDetail', PaytmPaymentDetail);
