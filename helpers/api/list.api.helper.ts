import MongooseConnect from 'middleware/mongoose.middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import sanitize from 'mongo-sanitize';

import { APIError, __ } from 'helpers/errors';
import { hasPermission } from 'helpers/auth';


export const listModel = (req: NextApiRequest, Model, { searchFields: defaultSearchFields = ['name'] }) => {
    const body = sanitize(req.body);
    const {
        __panigate = { page: 0, limit: 10 },
        __search = { value: null, fields: defaultSearchFields },
        __populate = [],
        ...extraQuery
    } = body;

    const { page, limit, orderBy, orderDirection = -1 } = __panigate;
    const { value: searchValue, fields: searchFields } = __search;

    const find = {
        ...extraQuery,
        ...(searchValue && {
            ...(searchFields.lenght > 1 && {
                $or: searchValue.map(field => ({
                    [field]: new RegExp(__search, 'gi')
                })),
            }),

            ...(searchValue.length === 1 && {
                [searchFields[0]]: new RegExp(searchValue, 'gi')
            })
        })
    }

    let query = Model
        .find(find)
        .skip(page)
        .limit(Math.min(20, limit));

    if (orderBy) query = query.order(orderBy, orderDirection);
    for (const path of __populate) query = query.populate(path);

    return query.exec();
}

const list = (Model, permission, defaults = {}) => MongooseConnect(
    async (req: NextApiRequest, res: NextApiResponse) => {
        const error = APIError(res);

        try {
            const session = await getSession({ req });
            const isPermitted = hasPermission(session, permission);

            if (isPermitted) {
                const data = await listModel(req, Model, defaults);
                res.json(data);
            }
            else error(__.NO_PERMISSION);

        } catch (e) {
            console.log(e);
            error(__.UNKNOWN_ERROR_OCCURRED);
        }
    }
);

export default list;
