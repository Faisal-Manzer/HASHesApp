import React, {useState} from 'react';
import Page from 'components/organisms/Page';;
import { NextPage } from 'next';

const createblog: NextPage = () => {
    const [progress, setprogress]= useState('0');
    return (
        <Page
            title='Show some love, Donate us'
            description=''
            hideDonateBanner={true}
            authenticationRequired={true}
        >
        <div className='py-12'>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                    <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form method='POST' action='action.php'>
                                <div className='mb-4'>
                                    <label className='text-l text-gray-600'>Title</label>
                                    <input type='text' className='border-2 border-gray-500 p-2 w-full' name='title' id='title' required></input>
                                </div>

                                <div className='mb-4'>
                                    <label className='text-l text-gray-600'>Description</label>
                                    <textarea  className='border-2 border-gray-500 p-2 w-full' name='description' id='description' required></textarea>
                                </div>

                                <div className='mb-8'>
                                    <label className='text-l text-gray-600'>Content</label>
                                    <textarea name='content' className='w-full border-2 border-gray-500' required></textarea>
                                </div>
                                <div className='flex-row'>
                                <label className='text-l text-gray-600'>Image Upload</label>
                                <div><progress className='border-solid border-gray-50 bg-white' value={progress} max='100' /></div>
                                <div><input className='p-2 pb-6' type='file'/></div>
                                </div>
                                
                                <div className='w-full flex p-1'>
                                    <button role='submit' className='w-32 p-3 bg-blue-500 text-white hover:bg-blue-400'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
        );
    };

export default createblog;