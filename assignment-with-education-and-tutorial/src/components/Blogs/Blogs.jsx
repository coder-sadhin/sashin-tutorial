import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    // console.log(blogs)

    return (
        <div className='w-11/12 mx-auto py-5'>
            <h2 className='font-bold dark:text-white text-center text-5xl mb-5'>Best Learning</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    blogs.map(blg => <Blog key={blg.id} blogs={blg}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;