import { FC } from 'react';
import Menu from '../Menu';
import Search from '../Search';
import Dropdown from '../Dropdown';
import namesCocktails from '../../mockedData/autocompleteCocktails.json';
import namesIngredients from '../../mockedData/autocompleteIngredients.json';
import namesCategories from '../../mockedData/categories.json';

import styles from './Sidebar.module.css';

const Sidebar: FC = () => {
    return (
        <div className={styles.container}>
            <Menu />
            <Search
                placeholder="Search by name"
                autocompleteData={namesCocktails}
            />
            <Search
                placeholder="Search by ingredients"
                autocompleteData={namesIngredients}
            />
            <Dropdown categories={namesCategories} />
        </div>
    );
};

export default Sidebar;
