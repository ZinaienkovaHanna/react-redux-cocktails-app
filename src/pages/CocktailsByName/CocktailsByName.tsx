import { FC } from 'react';
import { useLoaderData } from 'react-router';
import { Cocktail } from '../../types/cocktailsType';
import CocktailList from '../../components/CocktailList';
import Error from '../../components/Error';

const CocktailsByName: FC = () => {
    const { cocktailsSearchByName, name } = useLoaderData() as {
        cocktailsSearchByName: Cocktail[];
        name: string;
    };

    return cocktailsSearchByName.length === 0 ? (
        <Error text="No results matching your search query" />
    ) : (
        <CocktailList cocktails={cocktailsSearchByName} title={name} />
    );
};

export default CocktailsByName;
