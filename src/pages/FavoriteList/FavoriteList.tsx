import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import CocktailList from '../../components/CocktailList';
import Error from '../../components/Error';

const FavoriteList: FC = () => {
    const { cocktails } = useAppSelector((state) => state.cocktails);

    return cocktails.length === 0 ? (
        <Error text="You haven't added any cocktails yet" />
    ) : (
        <CocktailList cocktails={cocktails} title="Favorire cocktails" />
    );
};

export default FavoriteList;
