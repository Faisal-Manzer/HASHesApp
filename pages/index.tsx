import React from 'react';
import { NextPage } from 'next';

import Page from 'components/organisms/Page';
import WelcomeText from 'components/atoms/WelcomeText';
import Banner from 'components/atoms/Banner';


const Home: NextPage = () => {
    return (
        <Page
            title='Hello and Welcome our Club'
            description="HASHes Coding Club has a reputation for organising dedicated and interactive events, guiding students in a systematic manner. These events are very informative,including detailed roadmaps and valuable resources. We try our best to address everyone's doubts and queries, helping them overcome the initial hurdles they face."
        >
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='h-28 md:h-56 w-auto' src='/images/Undraw-Hello.svg' />
                    <WelcomeText />
                    <Banner className='h-12 md:h-24' />
                    <div className='text-2xl text-gray-500 my-4'>
                        A community of students, by students, for students
                    </div>
                </div>
            </div>
        </Page>
    );
};


export default Home;
