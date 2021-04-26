import { Permissions } from 'types/auth.type';


const $: Permissions = {
    SUPER_USER: {
        label: 'Super User',
        code: 'super_user',
    },
    VIEW_USERS: {
        label: 'See users',
        code: 'users.view',
    },
    CREATE_USER: {
        label: 'Create user',
        code: 'users.create',
    },
};

export default $;
