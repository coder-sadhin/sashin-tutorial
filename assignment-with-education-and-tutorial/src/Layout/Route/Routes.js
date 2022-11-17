import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../../components/Blogs/Blogs';
import CheckOut from '../../components/Courses/CheckOut';
import CourseDetails from '../../components/Courses/CourseDetails';
import Courses from '../../components/Courses/Courses';
import UserDetails from '../../components/UserDetails/UserDtails';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import FAQ from '../../components/FAQ/FAQ';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Login/Register';
import OverView from '../../components/OverView/OverView';
import PrivetRoute from '../../components/PrivetRoute/PrivetRoute';
import Main from '../Main';
import ResetPassword from '../../components/Login/ResetPassword';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/courses',
                loader: () => fetch('https://project-learning-courses-coder-sadhin.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/blogs',
                loader: () => fetch('https://project-learning-courses-coder-sadhin.vercel.app/blogs'),
                element: <Blogs></Blogs>
            },
            {
                path: '/overview',
                element: <OverView></OverView>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://project-learning-courses-coder-sadhin.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/courses/:id/checkout',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader: ({ params }) => fetch(`https://project-learning-courses-coder-sadhin.vercel.app/courses/${params.id}`)
            },
            {
                path: '/user/profile',
                element: <PrivetRoute><UserDetails></UserDetails></PrivetRoute>
            },
            {
                path: '/faq',
                loader: () => fetch('https://project-learning-courses-coder-sadhin.vercel.app/blogs'),
                element: <FAQ></FAQ>
            },
            {
                path: '/login/reset',
                element: <ResetPassword></ResetPassword>
            }
        ]
    }
])

