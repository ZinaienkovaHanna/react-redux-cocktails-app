import { FC } from 'react';
import { useLoaderData } from 'react-router';
import { Cocktail } from '../../types/cocktailsType';

const CocktailPage: FC = () => {
    const { cocktail } = useLoaderData() as { cocktail: Cocktail };
    console.log(cocktail);

    return <div>Cocktail</div>;
};

export default CocktailPage;
