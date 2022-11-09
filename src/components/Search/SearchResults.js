import { useEffect } from "react";
import { useMealSearch } from "./useMealSearch";
import Error from "../UI/Error/Error";
import Loading from "../UI/Loading/Loading";

const SearchResults = ({ searchType, children }) => {
    const { isLoading, hasError, searchResults, fetchSearchResults, searchText } = useMealSearch(searchType);

    useEffect(() => {
        fetchSearchResults();
    }, [searchText]);

    if (isLoading) {
        return <Loading />
    }

    if (hasError) {
        return <Error message="Something went wrong! Please try again later or reload page." />
    }

    if (!searchResults?.length) {
        return (
            <div className="rounded-md p-4 w-full mx-auto my-10 flex items-center justify-center text-pink-600 font-bold">
                No Results Found
            </div>
        )
    }

    return <>{children(searchResults)}</>
}

export default SearchResults;