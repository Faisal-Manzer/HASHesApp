import { getSession } from 'next-auth/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { APIError, __ } from 'helpers/errors';
import { hasPermission } from 'helpers/auth';
import Blog from 'models/blog.models';
import connectDB from 'middleware/mongoose.middleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const error = APIError(res);

    if (req.method === 'POST') {
        const { title, description, markdown } = req.body;

        if (
            !title ||
            title.trim() === '' ||
            !description ||
            description.trim() === '' ||
            !markdown ||
            markdown.trim() === ''
        ) {
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

        const permission = {
            code: session.user.permissions[0],
            label: '',
        };
        const isPermitted = hasPermission(session, permission);

        if (!isPermitted) {
            return error(__.NO_PERMISSION);
        }

        const newBlog = new Blog({
            title,
            description,
            markdown,
            image:
                'https://images.unsplash.com/photo-1619806629131-959b8fdc50a1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            author: session.user.uid,
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
