import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CocktailAutocomplete } from '../../types/cocktailsType';

import styles from './Search.module.css';

interface SearchType {
    placeholder: string;
    autocompleteData: CocktailAutocomplete[];
}

const Search: FC<SearchType> = ({ placeholder, autocompleteData }) => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchValue.trim() !== '') {
            navigate(`/cocktails/search/${searchValue}`, { replace: true });
            setSearchValue('');
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={placeholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={`${styles.search_input} ${
                    !searchValue.trim() && styles.invalid
                }`}
                list="cocktails"
                required
            />
            <datalist id="cocktails">
                {' '}
                {autocompleteData.map((value: any) => (
                    <option key={value.id} value={value.name} />
                ))}
            </datalist>
        </form>
    );
};

export default Search;
