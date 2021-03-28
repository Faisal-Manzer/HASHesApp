import $ from 'helpers/authorization/permissions';
import { Role } from 'types/authorization';

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
