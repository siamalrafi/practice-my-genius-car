import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../Context/AuthoProvider';


const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/'}>Products</Link ></li>
                    <li><Link to={'/orders'}>Orders</Link ></li>
                    {
                        user?.email ?
                            <>
                                <li><button onClick={logOutUser}>Log Out</button></li>
                            </>
                            :
                            <>
                                <li><Link to={'/register'}>Register</Link ></li>
                                <li><Link to={'/login'}>Login</Link ></li>
                            </>

                    }

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div >
    );
};

export default Header;