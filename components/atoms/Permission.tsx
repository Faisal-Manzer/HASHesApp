import React from 'react';

import { usePermission } from 'hooks/auth.hook';
import { Permission as TypePermission } from 'types/auth.type';

interface Props {
    permission?: TypePermission;
}

const Permission: React.FC<Props> = ({ permission, children }) => {
    const hasPermission = usePermission(permission);

    if (!hasPermission) return null;
    return (
        <>
            {children}
        </>
    );
}

export default Permission;
