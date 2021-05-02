import { getSession } from 'next-auth/client';
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

    if (req.method === 'POST') {
        const { title, description } = req.body;

        if (!title || title.trim() === '' || !description || description.trim() === '') {
            return error(__.INVALID_DATA_ERROR);
        }

        let session;
        try {
            session = await getSession({ req });
        } catch (e) {
            error(__.UNKNOWN_ERROR_OCCURRED);
        }

        if (!session) {
            return error(__.LOGIN_REQUIRED);
        }

        console.log(session);

        const newBlog = new Blog({
            title,
            description,
            image:
                'https://images.unsplash.com/photo-1619806629131-959b8fdc50a1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            author: '',
        });

        try {
            await newBlog.save();
        } catch (err) {
            error(__.UNKNOWN_ERROR_OCCURRED);
        }

        res.status(201).json({ blog: newBlog });
    }
};

export default connectDB(handler);
