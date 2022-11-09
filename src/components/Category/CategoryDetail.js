import Card from "../UI/Card/Card";

const CategoryDetail = ({ meals }) => {
    return (
        <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            {meals && meals.map((meal) => (
                <Card
                    key={meal.idMeal}
                    title={meal.strMeal}
                    img={meal.strMealThumb}
                    url={`/meal/${meal.idMeal}`}
                />
            ))}
        </div>
    )
}

export default CategoryDetail;