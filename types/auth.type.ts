import { Session as AuthSession } from 'next-auth';

export interface Permission {
    code: string;
    label: string;
}

export interface Role {
    name: string;
    permissions: Permission[];
}

type AuthUser = AuthSession['user'];
export interface User extends AuthUser {
    permissions: string[];
}

export interface Session extends AuthSession {
    user: User;
}

export type PERMISSION_NAMES =
    | 'SUPER_USER'
    | 'VIEW_USERS'
    | 'CREATE_USER';


export type Permissions = {
    [key in PERMISSION_NAMES]: Permission;
};
