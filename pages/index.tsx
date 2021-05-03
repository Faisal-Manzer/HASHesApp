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
                <div className="flex items-center justify-center">        
    
        <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
           
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold my-2">Hackathon</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
               
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     <p>Hashes i conducting a virtual hackathon. Participate with your teams and win amazing prizes.</p> 
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
             
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>10th May 2021</p> 
                </div>
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
                    <div className="my-2">
                        <p className="font-semibold text-base mb-2">Register for the event</p>
                        <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg">Register</button>
                    </div>
                </div>
            </div>
        </div>
</div>
            </div>
        </Page>
    );
}

export default Home;
