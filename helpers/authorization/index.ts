import PERMISSIONS from 'helpers/authorization/permissions';
import ROLES from 'helpers/authorization/permissions';
import { Permission } from 'types/authorization';

const PermissionsCodes = Object.keys(PERMISSIONS).map(key => PERMISSIONS[key].code);

const hasPermission = (session, permission: Permission) => {
    if (!session) return false;
    if (session.user.permissions.includes(PERMISSIONS.SUPER_USER.code)) return true;

    return !!session.user.permissions.includes(permission.code);
};

export { PERMISSIONS, ROLES, PermissionsCodes, hasPermission };
