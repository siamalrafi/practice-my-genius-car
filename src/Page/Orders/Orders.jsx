import { info } from 'daisyui/src/colors';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthoProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    /*     const [display, setDisplay] = useState(orders);
        console.log(display); */


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('secret-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOutUser()
                }
                return res.json()
            })
            .then(data => {
                setOrders(data);
            })

    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you?');

        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('you have deleted')
                        const remaining = orders.filter(odr => odr._id !== id)
                        setOrders(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const aproving = orders.find(ord => ord._id === id);
                    aproving.status = 'Approved';
                    const newOrder = [...remaining, aproving];
                    setOrders(newOrder);
                }
            })
    }

    return (
        <div className='mt-20'>
            <div className="p-5 mt-10 overflow-x-auto w-full mt-16">
                <table className=" table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className='text-xl text-black'>Name</th>
                            <th className='text-xl text-black'>Title</th>
                            <th className='text-xl text-black'>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <OrderRow
                                    key={order._id}
                                    order={order}
                                    handleDelete={handleDelete}
                                    handleStatusUpdate={handleStatusUpdate}
                                >
                                </OrderRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Orders;