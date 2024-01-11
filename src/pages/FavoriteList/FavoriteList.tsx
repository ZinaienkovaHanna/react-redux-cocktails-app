import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import CocktailList from '../../components/CocktailList';

import styles from './FavoriteList.module.css';

const FavoriteList: FC = () => {
    const { cocktails } = useAppSelector((state) => state.cocktails);
    console.log(cocktails);

    return cocktails.length === 0 ? (
        <p className={styles.text}>You haven't added any cocktails yet</p>
    ) : (
        <CocktailList cocktails={cocktails} title="Favorire cocktails" />
    );
};

export default FavoriteList;
