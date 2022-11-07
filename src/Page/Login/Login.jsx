import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthoProvider';

const Login = () => {
    const { user, loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                };

                fetch(`http://localhost:5000/jwt`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('secret-token', data.token)
                        navigate(from, { replace: true });
                    })



            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div>
            <div className="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Login</h2>
                    <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 "
                                name='email'
                                type="email" placeholder="Email Address" aria-label="Email Address" />
                        </div>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 "
                                name='password'
                                type="password" placeholder="Password" aria-label="Password" />
                        </div>
                        <input type="submit" className='text-center btn' value='login' />
                    </form>
                </div>

            </div >
        </div >
    );
};

export default Login;