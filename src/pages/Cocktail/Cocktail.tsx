import { FC } from 'react';
import { useLoaderData } from 'react-router';
import Image from '../../components/Image';
import CocktailInfo from '../../components/CocktailInfo';
import { Cocktail } from '../../types/cocktailsType';

import styles from './Cocktail.module.css';

const CocktailPage: FC = () => {
    const { cocktail } = useLoaderData() as { cocktail: Cocktail };
    console.log(cocktail);

    return (
        <div className={styles.container}>
            <Image imgSrc={cocktail.image} alt={cocktail.name} type="page" />
            <CocktailInfo cocktail={cocktail} />
        </div>
    );
};

export default CocktailPage;
