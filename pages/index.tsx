import React  from 'react';
import { NextPage } from 'next';
import { getSession } from 'next-auth/client';

import Page from 'components/oragnisms/Page';
import WelcomeText from 'components/atoms/WelcomeText';


const Home: NextPage = () => {
    return (
        <Page>
            <WelcomeText />
        </Page>
    );
};


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return { props: { session } };
}


export default Home;
