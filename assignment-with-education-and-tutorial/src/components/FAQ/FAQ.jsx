import React from 'react';
import { useLoaderData } from 'react-router-dom';



const FAQ = () => {
    const blogs = useLoaderData();

    return (
        <div>
            <div className='w-11/12 mx-auto grid gap-5 py-5 dark:bg-gray-900 '>
                <h2 className='font-bold text-center dark:text-white text-3xl my-5'>Some FAQ</h2>
                {
                    blogs.map(blog =>
                        <div className="collapse rounded-xl">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-base-300 peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <span className='text-3xl font-bold'> {blog.q_title}</span>
                            </div>
                            <div className="collapse-content peer-checked:bg-base-300">
                                <p className='text-xl'>{blog.ans}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FAQ;