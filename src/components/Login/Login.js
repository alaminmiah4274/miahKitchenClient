import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../Assets/image/logo/googlelogo.png';
import { AuthContext } from '../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    // to get context data
    const { userLogIn, providerLogin, error, setError } = useContext(AuthContext);

    // google login auth provider
    const googleProvider = new GoogleAuthProvider();

    // to show title name 
    useTitle('Login');

    // login form handling function
    const handleLogInForm = e => {

        // to prevent refresh the page
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // user login function from context
        userLogIn(email, password)

            .then(result => {
                const user = result.user;
                alert(error ? error : 'Loged in successfully');

                // to send user email to the server for getting jwt token 
                const currentUser = {
                    email: user.email
                };

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        // to set token in the local storage 
                        localStorage.setItem('miah-token', data.token);
                    })

                // to empty all field of the form 
                form.reset();
            })

            .catch(err => {
                const errorMessage = err.message;
                setError(errorMessage);
                alert(error);
                console.error(err)
            })
    };

    // google login system function
    const handleGoogleLogin = () => {

        // google login system from context
        providerLogin(googleProvider)

            .then(result => {
                const user = result.user;
                console.log(user);
            })

            .catch(err => console.error(err))
    };

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col">

                {/* login text */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>

                <div className="card flex w-96 bg-white">

                    <form onSubmit={handleLogInForm} className="card-body">

                        {/* email input field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        {/* password input field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>

                        {/* login button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    {/* redirect text to register */}
                    <p className='text-center mb-5'>New to Miah Kitchen? <Link to='/register'>register</Link></p>

                    {/* horizontal line */}
                    <p className='text-center font-medium'>or</p>

                    {/* google login system button */}
                    <button onClick={handleGoogleLogin} className='border rounded-full w-3/5 mx-auto my-5 flex items-center'>
                        <img src={googleLogo} alt="" width={40} />
                        <p className='ms-3'>Continue with Google</p>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Login;