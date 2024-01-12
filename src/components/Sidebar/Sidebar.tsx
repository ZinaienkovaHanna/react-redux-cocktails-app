import { FC } from 'react';
import Menu from '../Menu';
import Search from '../Search';
import Dropdown from '../Dropdown';
import Footer from '../Footer';
import namesCocktails from '../../mockedData/autocompleteNames.json';
import namesIngredients from '../../mockedData/autocompleteIngredients.json';
import namesCategories from '../../mockedData/categories.json';
import defaultNames from '../../mockedData/defaultNames.json';
import defaultIngredients from '../../mockedData/defaultIngredients.json';

import styles from './Sidebar.module.css';

const Sidebar: FC = () => {
    return (
        <div className={styles.container}>
            <div>
                <Menu />
                <Search
                    placeholder="Search by name"
                    autocompleteData={namesCocktails}
                    typeId="names"
                    type="Name"
                    defaultValue={defaultNames}
                />
                <Search
                    placeholder="Search by ingredients"
                    autocompleteData={namesIngredients}
                    typeId="ingredients"
                    type="Ingredient"
                    defaultValue={defaultIngredients}
                />
                <Dropdown categories={namesCategories} />
            </div>
            <Footer />
        </div>
    );
};

export default Sidebar;
