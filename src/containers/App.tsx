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
import {
    cocktailLoader,
    cocktailsByNameLoader,
    cocktailsByIngredientLoader,
    cocktailsByCategoryLoader,
} from '../pages/loader';

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
                loader: cocktailLoader,
            },
            {
                path: '/cocktails/searchByName/:searchByName',
                element: <CocktailsByName />,
                loader: cocktailsByNameLoader,
            },
            {
                path: '/cocktails/searchByIngredient/:searchByIngredient',
                element: <CocktailsByIngredient />,
                loader: cocktailsByIngredientLoader,
            },
            {
                path: '/cocktails/searchByCategory/:searchByCategory',
                element: <CocktailsByCategory />,
                loader: cocktailsByCategoryLoader,
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
