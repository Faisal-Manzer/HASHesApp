import { useSession } from 'next-auth/client';

import { hasPermission } from 'helpers/authorization';
import { Permission } from 'types/authorization';


export const usePermission = (permission: Permission) => {
    const [session, loading] = useSession();

    if (loading) return false;
    return hasPermission(session, permission);
};
