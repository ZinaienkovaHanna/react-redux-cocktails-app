import { FC } from 'react';
import CocktailList from '../../components/CocktailList';

import popularCocktails from '../../mockedData/popularCocktails.json';

const Home: FC = () => {
    return (
        <CocktailList
            cocktails={popularCocktails}
            title="Great COCKTAILS recipes you should know!"
        />
    );
};

export default Home;
