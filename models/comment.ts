import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const Comment = new Schema({
    user: { type: Schema.Types.ObjectId, required: true },
    page: { type: String, required: true },

    comment: { type: String },
    rating: {
        type: Number,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value',
        },
    },

    featured: { type: Boolean, default: false },  // we will only show featured comments
});

export default mongoose.models.Comment || mongoose.model('Comment', Comment);
