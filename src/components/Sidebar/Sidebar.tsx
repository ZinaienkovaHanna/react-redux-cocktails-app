import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search';
import Dropdown from '../Dropdown';
import namesCocktails from '../../mockedData/autocompleteCocktails.json';
import namesIngredients from '../../mockedData/autocompleteIngredients.json';
import namesCategories from '../../mockedData/categories.json';

import styles from './Sidebar.module.css';

const Sidebar: FC = () => {
    return (
        <div className={styles.container}>
            <Search
                placeholder="Search by name"
                autocompleteData={namesCocktails}
            />
            <Search
                placeholder="Search by ingredients"
                autocompleteData={namesIngredients}
            />
            <Dropdown categories={namesCategories} />
            <nav>
                <ul className={styles.wrapper}>
                    <li>
                        <NavLink to="/favorite" className={styles.nav_link}>
                            Favorite
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
