import PERMISSIONS from 'helpers/auth/permissions.auth.helper';
import ROLES from 'helpers/auth/permissions.auth.helper';
import { Permission } from 'types/auth.type';

const PermissionsCodes = Object.keys(PERMISSIONS).map(key => PERMISSIONS[key].code);
const $ = PERMISSIONS;

const hasPermission = (session, permission?: Permission) => {
    if (!permission) return true;
    if (!session) return false;
    if (session.user.permissions.includes(PERMISSIONS.SUPER_USER.code)) return true;

    return !!session.user.permissions.includes(permission.code);
};

export { PERMISSIONS, ROLES, PermissionsCodes, hasPermission, $ };
