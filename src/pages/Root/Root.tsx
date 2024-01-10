import { FC } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../../components/Sidebar';

import styles from './Root.module.css';

const Root: FC = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Root;
