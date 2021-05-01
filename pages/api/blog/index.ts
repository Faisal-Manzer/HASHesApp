import { NextApiRequest, NextApiResponse } from 'next';
import Blog from 'models/blog.models';
import connectDB from 'middleware/mongoose.middleware';
import { APIError, __ } from 'helpers/errors';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const error = APIError(res);

    if (req.method === 'GET') {
        try {
            const blogs = await Blog.find({});

            res.status(200).json({ blogs });
        } catch (err) {
            error(__.UNKNOWN_ERROR_OCCURRED);
            console.log(err);
        }
    }
};

export default connectDB(handler);
