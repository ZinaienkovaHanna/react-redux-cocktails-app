import { FC } from 'react';

import styles from './Footer.module.css';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <p className={styles.footer}>{`© ${currentYear} The Cocktails App`}</p>
    );
};

export default Footer;
