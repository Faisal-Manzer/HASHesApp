import { NextPage } from 'next';
import Page from 'components/organisms/Page';
import PageHeading from 'components/atoms/PageHeading';

const About: NextPage = () => {
    return (
        <Page title='Have a look at our Team' description=''>
            <div>
                <PageHeading className='text-center'>About Us</PageHeading>
                <div className='text-xl text-gray-400 px-8 xl:px-40 my-8 text-center'>
                    <p>
                        At HASHes, we value our diversity and motivate one and all to look past / surpass the boundaries
                        of college, course and branch and discover their true potential.
                    </p>
                    <div className='my-8'>
                        <h2 className='text-3xl text-black font-black text-center'>The Big Wheels of HASHes</h2>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default About;
