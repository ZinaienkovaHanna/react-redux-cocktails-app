import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Cocktail from '../pages/Cocktail';
import CocktailsByName from '../pages/CocktailsByName';
import CocktailsByIngredient from '../pages/CocktailsByIngredient';
import CocktailsByCategory from '../pages/CocktailsByCategory';
import FavoriteList from '../pages/FavoriteList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/cocktails/:cocktailId',
                element: <Cocktail />,
            },
            {
                path: '/cocktails/search/:searchByName',
                element: <CocktailsByName />,
            },
            {
                path: '/cocktails/search/:searchByIngredient',
                element: <CocktailsByIngredient />,
            },
            {
                path: '/cocktails/search/:searchByCategory',
                element: <CocktailsByCategory />,
            },
            {
                path: '/favorite',
                element: <FavoriteList />,
            },
        ],
    },
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
