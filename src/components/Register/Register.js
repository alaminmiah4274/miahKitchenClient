import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {

    const { userCreate } = useContext(AuthContext);

    const handleRegisterForm = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        userCreate(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(err => console.error(err))
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
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="url" name='image' placeholder="Your image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
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