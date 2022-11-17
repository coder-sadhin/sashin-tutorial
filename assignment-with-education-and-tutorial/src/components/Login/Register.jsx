import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, verifyEmail, updateCurrentUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');



    const handleToRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoUrl.value;
        const profile = { displayName, photoURL };

        form.reset();

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                updateCurrentUserProfile(profile);
                handleToVerifications();
                toast.success('User successfully created');
                toast.success('Please! Verify your email address');
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleToVerifications = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="text-center mt-5">
                <h1 className="text-5xl font-bold">Register!</h1>
            </div>
            <form onSubmit={handleToRegister}>
                <div className="hero bg-base-200">
                    <div className="hero-content w-6/12 flex-col">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' required type="text" placeholder="Enter Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoUrl</span>
                                    </label>
                                    <input name='photoUrl' type="text" placeholder="Enter Your photoUrl" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' required type="email" placeholder="Enter your email" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text-alt">Already Have An Account? <Link className='link link-hover' to='/login'>Login</Link></span>
                                    </label>
                                </div>
                                <span className='text-red-700'>{error}</span>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;