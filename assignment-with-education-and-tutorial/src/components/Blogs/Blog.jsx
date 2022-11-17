import React from 'react';

const Blog = ({ blogs }) => {
    // console.log(blogs)
    const { q_title, ans } = blogs;
    return (
        <div>
            <div className="card h-60 bg-base-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title font-bold">{q_title}</h2>
                    <p>{ans}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;