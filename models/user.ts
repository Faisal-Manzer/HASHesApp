import mongoose from 'mongoose';

const Schema = mongoose.Schema;

import { PermissionsCodes } from 'helpers/authorization';


const User = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    permissions: [{ type: String, enum: PermissionsCodes }],
});

export default mongoose.model('users', User);
