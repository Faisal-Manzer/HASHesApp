import React from 'react';
import { NextPage } from 'next';
import { getSession } from 'next-auth/client';

import { $ } from 'helpers/auth';

import Page from 'components/organisms/Page';
import { useAPI } from 'hooks/api.hook';


const Users: NextPage = () => {
    const { data, } = useAPI({
        url: '/api/user/list'
    });

    return (
        <Page
            title='Manage User'
            description=''
            permission={$.VIEW_USERS}
        >
            Hello Now you can manage user
            {data && data.map((user) => (
                <div key={user.name}>
                    {user.name}
                </div>
            ))}
        </Page>
    );
};


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return { props: { session } };
}


export default Users;
