import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as categoriesApi from "../api/categories";
import CategoryDetail from "../components/Category/CategoryDetail";
import CategoryList from "../components/Category/CategoryList";
import Search from "../components/Search/Search";
import SearchResults from "../components/Search/SearchResults";
import { useMealSearch } from "../components/Search/useMealSearch";
import Error from "../components/UI/Error/Error";
import Loading from "../components/UI/Loading/Loading";

const Categories = () => {
    const { hasSearch } = useMealSearch();
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const location = useLocation();
    const isCategories = location.pathname === "/categories";

    useEffect(() => {
        categoriesApi.getCategories().then((categories) => {
            setCategories(categories);
            console.log({categories});
            setIsLoading(false);
        }).catch((err) => {
            console.error(err);
            setIsLoading(false);
            setHasError(err);
        });
    }, []);

    return (
        <>
            {isCategories && <Search searchType="categories" />}
            {hasSearch ? (
                <SearchResults>
                    {(searchResults) => <CategoryDetail meals={searchResults || []} />}
                </SearchResults>
            ) : (
                <>
                    {isLoading && <Loading />}
                    {hasError && <Error message="Something went wrong! Please try again later or reload page." />}
                    {(!isLoading && !hasError) && (<CategoryList categories={categories} />)}
                </>
            )
            }
        </>
    )
}

export default Categories;