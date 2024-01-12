import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CocktailAutocomplete } from '../../types/cocktailsType';

import styles from './Search.module.css';

interface SearchType {
    placeholder: string;
    autocompleteData: CocktailAutocomplete[];
    typeId: string;
    type: string;
    defaultValue: string[];
}

const Search: FC<SearchType> = ({ placeholder, autocompleteData, typeId, type, defaultValue }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchHistory, setSearchHistory] = useState<string[]>(defaultValue);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchValue.trim() !== '') {
            setSearchValue('');
            navigate(`/cocktails/searchBy${type}/${searchValue}`, { replace: true });
        }

        updateSearchHistory();

        setSearchValue('');
    };

    const updateSearchHistory = () => {
        const updatedHistory = [...searchHistory];

        if (!searchHistory.includes(searchValue)) {
            updatedHistory.shift();
            updatedHistory.push(searchValue);
        }

        setSearchHistory(updatedHistory);
    };

    const handleOptionClick = (value: string) => {
        setSearchValue(value);
    };

    return (
        <div className={styles.container}>
            <form className={styles.search_form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={`${styles.search_input} ${!searchValue.trim() && styles.invalid}`}
                    list={typeId}
                    required
                />
                <ul className={styles.list}>
                    {searchHistory.map((value, index) => (
                        <div className={styles.li_container}>
                            <li
                                key={index}
                                onClick={() => handleOptionClick(value)}
                                className={styles.li}
                            >
                                {value}
                            </li>
                        </div>
                    ))}
                </ul>
                <datalist id={typeId}>
                    {' '}
                    {autocompleteData.map((value) => (
                        <option key={value.id} value={value.name} />
                    ))}
                </datalist>
            </form>
        </div>
    );
};

export default Search;
