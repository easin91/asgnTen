import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Courses/Courses/Course";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Questions from "../../Pages/FAQ/Questions";
import Blog from "../../Pages/Blog/Blog";
import Topics from "../../Pages/Courses/Topics/Topics";
import CheckOut from "../../Pages/CheckOut/CheckOut";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://asgn-server.vercel.app/course')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://asgn-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/course',
                element: <Topics></Topics>,
                loader: () => fetch('https://asgn-server.vercel.app/course')
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`https://asgn-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkOut/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://asgn-server.vercel.app/checkOut/${params.id}`)
            },
            {
                path: '/question',
                element: <Questions></Questions>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]

    },
    {
        path: '*', element: <div className="w-50 mx-auto">
            <h2>OOps!!!</h2><h3>404</h3>
            <p>You are trying with wrong keyword.</p>
            Hence , You will never find this route!!!
            <h4>Please try with right keyword.</h4>
        </div>
    }
])