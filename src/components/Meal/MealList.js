import MealCard from "./MealCard";

const MealList = ({ meals }) => {
    console.log("meal list")
    return (
        <>
            {
                meals && meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)
            }
        </>
    )
}

export default MealList;