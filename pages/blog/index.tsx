import React from 'react';
import { NextPage } from 'next';
import NProgress from 'nprogress';

import Page from 'components/organisms/Page';
import { useSession } from 'next-auth/client';



const Blog: NextPage = () => {
    const [session, loading] = useSession();

    
    return (
        <Page
            title='Show some love, Donate us'
            description=''
            hideDonateBanner={true}
            authenticationRequired={true}
        >
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center">
                Welcome to Hashes Blog
            </h1>
            <h6 className="text-1xl font-bold leading-7 p-2.5 text-gray-500 sm:text-text-5xl sm:truncate text-center">
                Read and create Blogs
            </h6>
            <div className="px-8 mt-10">
                <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
                <img className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none" src="https://i.pinimg.com/originals/78/ac/aa/78acaad3c2890c0d47f94ec7b3cce9fb.jpg" alt="" />
                <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
                    <h2 className="text-gray-700 font-semibold">Shift overall look and fell by adding these wonderful touches to furniture in your home</h2>
                    <p className="text-sm text-gray-600 mt-4">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    <div className="flex items-center mt-8">
                    <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full" src="/images/Undraw-Hello.svg" alt="" />
                        <div className="ml-4">
                        <p className="text-gray-800 text-sm font-semibold">Samar Imam</p>
                        <p className="text-gray-600 text-sm">01 May 2021</p>
                        </div>
                    </div>
                    <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="px-8 mt-10">
                <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
                <img className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none" src="/images/Undraw-Hello.svg" alt="" />
                <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
                    <h2 className="text-gray-700 font-semibold">Shift overall look and fell by adding these wonderful touches to furniture in your home</h2>
                    <p className="text-sm text-gray-600 mt-4">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    <div className="flex items-center mt-8">
                    <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full" src="/images/Undraw-Hello.svg" alt="" />
                        <div className="ml-4">
                        <p className="text-gray-800 text-sm font-semibold">Samar Imam</p>
                        <p className="text-gray-600 text-sm">01 May 2021</p>
                        </div>
                    </div>
                    <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Page>
    );
};


export default Blog;
