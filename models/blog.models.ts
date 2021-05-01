import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
    },
    { timestamps: true },
);

export default mongoose.model('Blog', BlogSchema);
