import $ from 'helpers/auth/permissions.auth.helper';
import { Role } from 'types/auth.type';

const ROLES: Role[] = [
    {
        name: 'Global',
        permissions: [$.SUPER_USER],
    },
    {
        name: 'User Management',
        permissions: [$.CREATE_USER, $.VIEW_USERS],
    },
];


export default ROLES;
