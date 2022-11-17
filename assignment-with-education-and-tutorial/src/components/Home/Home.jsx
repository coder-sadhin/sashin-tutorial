import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJJkXXov3Ysx1tLxWc7LS9adunB439dBrXw&usqp=CAU")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">SADHIN TUTORIALS</h1>
                        <p className="mb-5">This is the site of learning. In our website you have got the setifiction learning and best knowladge for your life. moreover six subject we have to teach by using degital platform</p>
                        <Link to='/courses'><button className="btn btn-primary mr-3">Courses</button></Link>
                        <Link to='/blogs'><button className="btn btn-primary">Blogs</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;