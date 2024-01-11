import { FC, useState } from 'react';
import { useLoaderData } from 'react-router';
import Image from '../../components/Image';
import CocktailInfo from '../../components/CocktailInfo';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addCocktail, deleteCocktail } from '../../store/cocktailsReducer';
import { checkingCocktailInMyList } from '../../utils/checkingCocktailInMyList';
import { Cocktail } from '../../types/cocktailsType';

import styles from './Cocktail.module.css';

const CocktailPage: FC = () => {
    const { cocktail } = useLoaderData() as { cocktail: Cocktail };
    const { cocktails } = useAppSelector((state) => state.cocktails);
    const dispatch = useAppDispatch();

    const [isInMyList, setIsInMyList] = useState<boolean>(
        checkingCocktailInMyList(cocktails, cocktail.id)
    );

    const handleAddAndDeleteCocktail = () => {
        if (!isInMyList) {
            setIsInMyList(true);
            dispatch(addCocktail(cocktail));
        } else {
            setIsInMyList(false);
            dispatch(deleteCocktail(cocktail.id));
        }
    };

    return (
        <div className={styles.container}>
            <Image
                imgSrc={cocktail.image}
                alt={cocktail.name}
                type="page"
                isInMyList={isInMyList}
                onClick={handleAddAndDeleteCocktail}
            />
            <CocktailInfo cocktail={cocktail} />
        </div>
    );
};

export default CocktailPage;
