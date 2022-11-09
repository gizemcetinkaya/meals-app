import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getRandomMeal } from "../../api/meal";
import { getMealsByCategory, getMealsByName } from "../../api/search";


export const useMealSearch = (type) => {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const searchText = searchParams.get("q") || params.categoryName;
    const searchType = searchParams.get("type") || type;
    const navigate = useNavigate();

    const setSearchParameters = (text, type) => text ? navigate(`?q=${text}&type=${type}`) : navigate();

    const searchMeals = (key) => {
        if (!key) {
            return getRandomMeal();
        }

        return searchType === "name" ? getMealsByName(key) : getMealsByCategory(key);
    }

    const fetchSearchResults = async () => {
        try {
            const data = await searchMeals(searchText);
            setSearchResults(data);
            setIsLoading(false);
        } catch (err) {
            console.error(err);
            setHasError(true);
            setIsLoading(false);
        }
    }


    return {
        searchResults,
        searchText,
        setSearchParameters,
        isLoading,
        hasError,
        fetchSearchResults,
        hasSearch: !!searchText
    }

}