import { FC } from 'react';
import { useLoaderData } from 'react-router';
import { Cocktail } from '../../types/cocktailsType';
import CocktailList from '../../components/CocktailList';
import Error from '../../components/Error';

const CocktailsByIngredient: FC = () => {
    const { cocktailsByIngredient, ingredient } = useLoaderData() as {
        cocktailsByIngredient: Cocktail[];
        ingredient: string;
    };

    return cocktailsByIngredient.length === 0 ? (
        <Error text="No results matching your search query" />
    ) : (
        <CocktailList cocktails={cocktailsByIngredient} title={ingredient} />
    );
};

export default CocktailsByIngredient;
