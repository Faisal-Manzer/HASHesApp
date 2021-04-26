import { useSession } from 'next-auth/client';

import { hasPermission } from 'helpers/auth';
import { Permission } from 'types/auth.type';


export const usePermission = (permission?: Permission) => {
    const [session, loading] = useSession();

    if (loading) return false;
    return hasPermission(session, permission);
};
