import Search from '../components/Search/Search';
import MealList from '../components/Meal/MealList';
import SearchResults from '../components/Search/SearchResults';

function Home() {
    return (
        <>
            <Search searchType="name" />
            <SearchResults searchType="name">
                {(searchResults) => <MealList meals={searchResults} />}
            </SearchResults>
        </>
    );
}

export default Home;
