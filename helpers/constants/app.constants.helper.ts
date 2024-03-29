import { PERMISSIONS } from 'helpers/auth';
import { Permission } from 'types/auth.type';

interface NavBarLinks {
    label: string;
    href: string;
    permission?: Permission;
}

export const NAV_BAR_LINKS: NavBarLinks[] = [
    {
        label: 'Users',
        href: '/admin/users/',
        permission: PERMISSIONS.VIEW_USERS,
    },
    {
        label: 'About Us',
        href: '/about',
    },
    {
        label: 'Create Blog',
        href: '/createblog',
        permission: PERMISSIONS.VIEW_USERS,
    },
];
