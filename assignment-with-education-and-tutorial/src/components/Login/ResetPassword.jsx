import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleToLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        form.reset();

        resetPassword(email)
            .then(() => {
                toast.success('Send Password Reset mail');
                navigate('/login')
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="text-center pt-5">
                <h1 className="text-5xl dark:text-white font-bold">Password Reset!</h1>
            </div>
            <form className='dark:bg-gray-900' onSubmit={handleToLogin}>
                <div className="hero dark:bg-gray-900 bg-base-200">
                    <div className="hero-content w-6/12 flex-col">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' required type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <span className='text-red-700'>{error}</span>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Reset Password</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default ResetPassword;