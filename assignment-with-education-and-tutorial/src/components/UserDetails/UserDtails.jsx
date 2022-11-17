import React from 'react';
import { useContext } from 'react';
import { FaUserTie } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const UserDetails = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='flex justify-center py-10 dark:bg-gray-900'>
            <div className="card bg-base-300 shadow-xl">
                <figure className="px-10 pt-10">
                    {
                        user?.photoURL ? <img src={
                            user.photoURL
                        } alt="" className="rounded-xl" />
                            :
                            <FaUserTie />
                    }
                </figure>
                <div className="card-body">
                    <h2 className="card-title">User Name: <span className='text-blue-500'>{user?.displayName}</span></h2>
                    <h2 className="card-title">User Email: <span className='text-blue-500'>{user?.email}</span></h2>

                    <div className="card-actions mt-5">
                        <Link className="btn btn-primary mx-auto" to='/'><button>Back To Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;