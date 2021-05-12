import React from 'react';
import Page from 'components/organisms/Page';
import { Blogpost } from 'components/atoms/data';
import { format, parseISO } from 'date-fns';

interface Props {
    title: string,
    date: string,
    content: string,
    image: string,
  }

export default function BlogPage({ title, date, content,image }:Props) {
    
    return (
        <Page
            title='Show some love, Donate us'
            description=''
            hideDonateBanner={true}
            authenticationRequired={true}
        >
        <div className='px-8 mt-10'>
                <div className='mx-auto lg:w-3/5 lg:h-auto'>
                    <img className='rounded-tr-md rounded-tl-md h-48 w-full lg:h-80  ' src={image} alt="" />
                    <div className='bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md'>
                        <h2 className='text-3xl text-gray-700 font-semibold'>{title}</h2>
                        <p className='text-sm text-gray-600 mt-4 prose'>{content}</p>
                        <div className='flex items-center mt-8'>
                        <div className='flex items-center'>
                            <img className='h-10 w-10 rounded-full' src={image} alt="" />
                            <div className='ml-4'>
                            <p className='text-gray-800 text-sm font-semibold'>{title.substr(0, 50)}</p>
                            <p className='text-gray-600 text-sm'>{format(parseISO(new Date().toISOString()), 'MMMM do, uuu')}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </Page>

        );
  }
  export async function getStaticProps(context) {
    const { params } = context;
    return {
      props: Blogpost.find((item) => item.slug === params.slug),
    };
  }

export async function getStaticPaths() {
    return {
        paths: Blogpost.map((item) => ({
            params: {
              slug: item.slug,
            },
          })),
          fallback: false,
        };
      }
