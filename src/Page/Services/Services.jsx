import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://my-genius-car-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {

                setServices(data)
            })
    }, [])




    return (
        <div>
            <h1 className='text-3xl mt-10 p-5 bg-gray-500 text-white text-center'>Our Services</h1>


          <div className='grid lg:grid-cols-3 ml-10' >
          {
                services.map(service => <Card
                    service={service}
                    key={service.service_id}
                >
                </Card>)
            }
          </div>




        </div>
    );
};

export default Services;