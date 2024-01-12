import { FC } from 'react';
import { useLoaderData } from 'react-router';
import { Cocktail } from '../../types/cocktailsType';
import CocktailList from '../../components/CocktailList';

const CocktailsByIngredient: FC = () => {
    const { cocktailsByCategory, category } = useLoaderData() as {
        cocktailsByCategory: Cocktail[];
        category: string;
    };

    return <CocktailList cocktails={cocktailsByCategory} title={category} />;
};

export default CocktailsByIngredient;
