import HomePage from '../pages/HomePage';
import Login from '../pages/Login';

const mainRouter = [
    {
        path: '/',
        children: [
            {
                path: '/',
                Component: Login,
            },
            {
                path: '/home',
                Component: HomePage,
            },
        ],
    },
];
export default mainRouter;
