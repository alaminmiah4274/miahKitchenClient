import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/image/logo/logo.png';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleUserLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ? <>
                <li><Link to=''>My Reviews</Link></li>
                <li><Link to=''>Ordered Foods</Link></li>
            </> :
                ''
        }
    </>

    return (
        <div className="navbar bg-white sticky h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-full absulute">
                        {navMenu}
                    </ul>
                </div>
                <div>
                    <Link to='/'>
                        <img src={logo} alt="" width={150} />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.uid ?
                    <button onClick={handleUserLogOut} className="btn btn-primary">Log Out</button> :
                    <Link to='/login' className="btn btn-primary">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;