import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.form?.pathname || '/'
    // console.log(form)

    const handleToLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        userLogin(email, password)
            .then(result => {
                console.log(result)
                const user = result.user;
                if (user) {
                    toast.success('Login success');
                    navigate(from, { replace: true })
                }


                // console.log(user)
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleSignInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                if (user) {
                    toast.success('Login success');
                    navigate(from, { replace: true })
                }
                console.log(user)
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleSignInWithGithub = () => {
        const provider = new GithubAuthProvider();
        githubLogin(provider)
            .then(result => {
                const user = result.user;
                if (user) {
                    toast.success('Login success');
                    if (!user.emailVerified) {
                        toast.error('Please Verify your email');
                    }
                    navigate(from, { replace: true })
                }
            })
            .catch(error => {
                console.error('error hoiche', error);
            })
    }

    return (
        <div>
            <div className="text-center pt-5">
                <h1 className="text-5xl dark:text-white font-bold">Login now!</h1>
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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text-alt link link-hover"><Link to='/login/reset'>Forgot password?</Link></span>
                                        <span className="label-text-alt">New On Website? <Link className='link link-hover' to='/register'>Register</Link></span>
                                    </label>
                                </div>
                                <span className='text-red-700'>{error}</span>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p className='text-center text-success font-bold mt-3'>Went to Direct Login</p>
                                <div className="form-control mt-2">
                                    <button onClick={handleSignInWithGoogle} className="btn btn-success hover:btn-primary hover:text-white"><FaGoogle className='mr-3' /> Login With Google</button>
                                </div>
                                <div className="form-control mt-3">
                                    <button onClick={handleSignInWithGithub} className="btn btn-success hover:btn-primary hover:text-white"><FaGithub className='mr-3' /> Login With Github</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div >

    );
};

export default Login;