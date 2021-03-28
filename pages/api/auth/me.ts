import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

export default async (req: NextApiRequest, res: NextApiResponse)  => {
    const session = await getSession({ req });
    if (!session) return res.json({ user: null });
    res.json(session.user);
}
