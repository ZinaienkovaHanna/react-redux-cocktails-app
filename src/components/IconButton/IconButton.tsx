import { FC } from 'react';
import Icon from '@mdi/react';

import styles from './IconButton.module.css';

interface IconButtonProps {
    onClick: () => void;
    path: string;
    title?: string;
    size: number;
}

const IconButton: FC<IconButtonProps> = ({ onClick, path, title, size }) => {
    return (
        <button onClick={onClick} className={styles.button} title={title}>
            <Icon path={path} size={size} />
        </button>
    );
};

export default IconButton;
