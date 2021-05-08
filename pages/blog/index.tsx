import React from 'react';
import { NextPage } from 'next';
import Page from 'components/organisms/Page';
import BlogListItem from 'components/atoms/BlogListItem';
import { Blogpost } from 'components/atoms/data';

const Blog: NextPage = () => {
    return (
        <Page
            title='Show some love, Donate us'
            description=''
            hideDonateBanner={true}
            authenticationRequired={true}
        >
            <h1 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center'>
                Welcome to Hashes Blog
            </h1>
            <h6 className='text-1xl font-bold leading-7 p-2.5 text-gray-500 sm:text-text-5xl sm:truncate text-center'>
                Read and create Blogs
            </h6>
                <BlogListItem />
        </Page>
    );
};

export default Blog;
