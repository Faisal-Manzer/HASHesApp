import { NextApiResponse } from 'next';

import * as CODES from 'helpers/errors/codes.errors.helper';


export const APIError = (res: NextApiResponse) => (error) => {
    const [code, status = 400, message = ''] = error;

    res.status(status);
    res.json({ error: true, code, message });
}

export const __ = CODES;
