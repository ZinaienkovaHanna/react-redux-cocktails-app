import { FC } from 'react';
import { useNavigate } from 'react-router';
import { Category } from '../../types/cocktailsType';

import styles from './Dropdown.module.css';

interface DropdownProps {
    categories: Category[];
}

const Dropdown: FC<DropdownProps> = ({ categories }) => {
    const navigate = useNavigate();

    function handleChange(value: string) {
        const encodedValue = encodeURIComponent(value);
        navigate(`/cocktails/searchByCategory/${encodedValue}`, { replace: true });
        value = '';
    }

    return (
        <div className={styles.container}>
            <select onChange={(e) => handleChange(e.target.value)} className={styles.select}>
                <option value="" className={styles.option}>
                    Select a category
                </option>
                {categories.map((category) => (
                    <option key={category.id} value={category.category} className={styles.option}>
                        {category.category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
