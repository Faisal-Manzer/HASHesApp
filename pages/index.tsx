import React from 'react';
import { NextPage } from 'next';
import { getSession } from 'next-auth/client';

import Page from 'components/organisms/Page';
import WelcomeText from 'components/atoms/WelcomeText';
import Banner from 'components/atoms/Banner';


const Home: NextPage = () => {
    return (
        <Page
            title='Hello and Welcome our Club'
            description='HASHes is an open programming Club for students, by students. We are open to everyone.'
        >
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='h-28 md:h-56 w-auto' src='/images/Undraw-Hello.svg' />
                    <WelcomeText />
                    <Banner className='h-12 md:h-28' />
                    <div className='text-3xl text-gray-500 my-4'>
                        An open programming Club for students, by students.
                    </div>
                </div>
            </div>
        </Page>
    );
};


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return { props: { session } };
}


export default Home;
