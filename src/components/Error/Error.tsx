import { FC } from 'react';

import styles from './Error.module.css';

interface ErrorProps {
    text: string;
}

const Error: FC<ErrorProps> = ({ text }) => {
    return <p className={styles.text}>{text}</p>;
};

export default Error;
