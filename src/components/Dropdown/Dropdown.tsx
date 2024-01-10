import { FC, useState } from 'react';
import { Category } from '../../types/cocktailsType';

import styles from './Dropdown.module.css';

interface DropdownProps {
    categories: Category[];
}

const Dropdown: FC<DropdownProps> = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    function handleChange(value: string) {
        setSelectedCategory(value);
        value = '';
    }
    return (
        <div className={styles.container}>
            {/* <label htmlFor="category" className={styles.label}>
                Select a category:
            </label> */}
            <select
                onChange={(e) => handleChange(e.target.value)}
                className={styles.select}
            >
                <option value="" className={styles.option}>
                    Select a category
                </option>
                {categories.map((category) => (
                    <option
                        key={category.id}
                        value={category.category}
                        className={styles.option}
                    >
                        {category.category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
