import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthoProvider';

const Register = () => {
    const { user, createUser } = useContext(AuthContext)

    console.log(user);


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });

    }



    return (
        <div>
            <div>
                <div className="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="px-6 py-4">
                        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Register</h2>
                        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Register Welcome Back</h3>

                        <form onSubmit={handleRegister}>
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
                            <input type="submit" className='text-center btn' value='Register' />
                        </form>
                    </div>

                </div >
            </div >
        </div>
    );
};

export default Register;