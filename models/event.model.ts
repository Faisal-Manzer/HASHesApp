import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const Event = new Schema({
    name: { type: String, required: true },
    time: {
        from: { type: Date, required: true },
        to: { type: Date, required: true },
    },
    description: { type: String, required: true },
    speakers: [{
        type: Schema.Types.ObjectId,
        ref: 'Speaker'
    }],

    isCanceled: { type: Boolean, default: false },
    photos: [{ type: String, required: true }],
});

export default mongoose.models.Event || mongoose.model('Event', Event);
