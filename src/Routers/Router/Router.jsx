import Main from '../../Layout/Main/Main';
import Home from '../../Page/Home/Home/Home';
import Login from '../../Page/Login/Login';
import Register from '../../Page/Register/Register';
import CheckOut from '../../Page/CheckOut/CheckOut';
import Order from '../../Page/Orders/Orders';
import PrivateRout from '../../Routers/PrivateRout/PrivateRout';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element:
                    <PrivateRout>
                        <CheckOut></CheckOut>
                    </PrivateRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'orders',
                element:
                    <PrivateRout>
                        <Order></Order>
                    </PrivateRout>

            }
        ]
    }
]);


export default router;
