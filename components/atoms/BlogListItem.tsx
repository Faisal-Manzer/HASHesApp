import React from 'react';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

function BlogListItem () {
    const [session, loading] = useSession();
    return (
        // {Blogpost.map((item) => (
            <div className='px-8 mt-10'>
                <div className='mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto'>
                    <img className='rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none' src='https://wallpaperaccess.com/full/279547.jpg' alt="" />
                    <div className='bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md'>
                        <Link key='first' href={`/blog/first`}><a className='text-3xl text-gray-700 font-semibold'>Shift overall look and fell by adding</a></Link> 
                        <p className='text-sm text-gray-600 mt-4'>{'Ever been in a room and felt like something was missing?d felt like something was missing?Ever been in a room and felt like something was missingbeen in a room and felt like something was missing?'.substr(0, 130)}</p>
                        <div className='flex items-center mt-8'>
                        <div className='flex items-center'>
                            <img className='h-10 w-10 rounded-full' src={session.user.image} alt="" />
                            <div className='ml-4'>
                            <p className='text-gray-800 text-sm font-semibold'>{session.user.name}</p>
                            <p className='text-gray-600 text-sm'>{format(parseISO(new Date().toISOString()), 'MMMM do, uuu')}</p>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        // ))}
    );
};
 export default BlogListItem;