import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Menu.module.css';

const Menu: FC = () => {
    return (
        <nav>
            <ul className={styles.wrapper}>
                <li className={styles.list}>
                    <Link to="/" className={styles.logo}>
                        <img
                            src="/static/images/logo_cocktail.png"
                            alt="logo"
                            className={styles.logo}
                        />
                    </Link>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? styles.active : styles.nav_link)}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favorite" className={styles.nav_link}>
                        Favorite
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
