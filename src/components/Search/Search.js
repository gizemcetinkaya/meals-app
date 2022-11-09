import { useEffect, useState } from 'react';
import Input from '../UI/Input/Input';
import { useMealSearch } from './useMealSearch';

const Search = ({ searchType }) => {
    const { setSearchParameters, searchText } = useMealSearch(searchType);
    const [searchValue, setSearchValue] = useState(searchText || "");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchParameters(searchValue, searchType);
        }, 1500)

        return () => clearTimeout(timer);
    }, [searchValue]);

    const changeHandler = (e) => {
        setSearchValue(e.target.value.trim());
    }

    return (
        <div className="flex flex-row">
            <Input
                value={searchValue}
                onChange={changeHandler}
                type="text"
                placeholder={`Search meals by ${searchType}...`}
            />
        </div>
    )
}

export default Search;