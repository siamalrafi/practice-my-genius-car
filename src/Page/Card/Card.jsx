import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {

    const { img, title, price, _id } = service;


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className=" text-center text-4xl font-bold card-body">
                    <h2 className="text-4xl font-bold card-title">{title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary">Check Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;