import { info } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthoProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const services = useLoaderData();
    const { price, _id, title, email } = services;
    console.log(email);
    const handlePlaceOrder = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = `${form.first.value} ${form.last.value}`;
        const email = user?.email || 'unsubscibe'
        const phone = form.phone.value;
        const massage = form.massage.value;

        const order = {
            services: _id,
            serviceName: title,
            price,
            customer: name,
            email: email,
            phone: phone,
            massage: massage
        };

        fetch('https://my-genius-car-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Order was successfully')
                    form.reset();
                }
            })


    }


    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <div className="m-10 text-2xl text-orange-500 font-bold text-center">{title}</div>
                <div className="m-5 text-2xl text-blue-800 font-bold text-center">Price : {price}</div>
                <div className='gap-5 grid grid-cols-2 text-center justify-items-center'>
                    <input name='first' type="text" placeholder="First Name" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='last' type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-info w-full max-w-xs" />
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
                </div>
                <textarea name='massage' className="mt-5 w-full h-32 textarea textarea-error" placeholder="Massage"></textarea>
                <input type="submit" className='btn bg-blue-800 text-center' value="Submit" />
            </form>
        </div>
    );
};

export default CheckOut;