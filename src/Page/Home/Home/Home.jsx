import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthoProvider';
import Service from '../../../Page/Services/Services';


const Home = () => {
    
    const {user} = useContext(AuthContext)
  

    return (
        <div>

            <Service>

            </Service>


        </div>
    );
};

export default Home;