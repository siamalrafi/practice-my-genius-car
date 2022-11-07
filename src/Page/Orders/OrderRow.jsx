import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const [orderService, setOrderService] = useState();
    const { _id, email, price, status, serviceName, customer, services } = order;


    useEffect(() => {
        fetch(`http://localhost:5000/services/${services}`)
            .then((res) => res.json())
            .then(data => {
                setOrderService(data)
            })
    }, [services]);



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn text-white'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                orderService?.img ?
                                    <img src={orderService?.img} alt="Avatar" /> :
                                    <img src={orderService?.img} alt="Avatar" />
                            }
                        </div>
                    </div>
                    <div className='text-xl text-orange-500 '>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td className='text-xl'>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td className='text-2xl'>{email}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className='btn text-green-500'>{status ? status : 'pending...'}</button>
            </th>
        </tr>

    );
};

export default OrderRow;