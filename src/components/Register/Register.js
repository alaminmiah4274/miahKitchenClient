import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {

    const { userCreate, userProfileUpdate, error, setError } = useContext(AuthContext);

    // to show title name 
    useTitle('Register');

    const handleRegisterForm = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // to create a new user
        userCreate(email, password)
            .then(result => {
                handleUserProfileUpdate(name, photoURL);
                form.reset();
                alert(error ? error : 'Registered successfully');
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                alert(error);
                console.error(error)
            })

        // to get user name and photoURL
        const handleUserProfileUpdate = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            };

            userProfileUpdate(profile)
                .then(() => { })
                .catch(error => {
                    const errorMessage = error.message;
                    setError(errorMessage);
                    console.error(error)
                })
        };
    };

    return (
        <div className="hero min-h-screen bg-base-100 py-20">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card flex w-96 bg-white">
                    <form onSubmit={handleRegisterForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photoURL' placeholder="Your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='text-center mb-10'>Already have an account? <Link to='/login'>login</Link></p>
                </div>
            </div>
        </div >
    );
};

export default Register;