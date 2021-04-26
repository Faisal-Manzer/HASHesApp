import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const Speaker = new Schema({
    name: { type: String, required: true },
    img: { type: String },
    email: { type: String, required: true },
    linkedin: { type: String },

    user: { type: Schema.Types.ObjectId, ref: 'users' }
});

export default mongoose.models.Speaker || mongoose.model('Speaker', Speaker);
