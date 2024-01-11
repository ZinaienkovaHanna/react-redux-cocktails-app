import { FC } from 'react';
import Icon from '@mdi/react';

import styles from './IconButton.module.css';

interface IconButtonProps {
    onClick: () => void;
    path: string;
    title?: string;
    size: number;
    type?: string | undefined;
}

const IconButton: FC<IconButtonProps> = ({
    onClick,
    path,
    title,
    size,
    type,
}) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <Icon path={path} size={size} />
        </button>
    );
};

export default IconButton;
