import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const EventAttendee = new Schema({
    event: { type: Schema.Types.ObjectId, required: true, ref: 'Event' },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
});

export default mongoose.models.EventAttendee || mongoose.model('EventAttendee', EventAttendee);
