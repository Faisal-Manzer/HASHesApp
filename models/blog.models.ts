import mongoose from 'mongoose';

const Blog = new mongoose.Schema(
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

export default mongoose.models.Blog || mongoose.model('Blog', Blog);
