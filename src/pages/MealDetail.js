import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as mealApi from "../api/meal";
import MealDetailCard from "../components/Meal/MealDetailCard";
import Error from "../components/UI/Error/Error";
import Loading from "../components/UI/Loading/Loading";

function MealDetail() {

    const [meal, setMeal] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    let params = useParams();


    useEffect(() => {
        setIsLoading(true);
        mealApi.getMeal(params.mealId).then((meals) => {
            let meal = meals[0];
            // console.log(meal);
            setMeal(meal);
            setIsLoading(false);
        }).catch((err) => {
            console.error(err);
            setIsLoading(false);
            setHasError(err);
        });

    }, []);

    return (
        <>
            {isLoading && <Loading />}
            {hasError && <Error message="Something went wrong! Please try again later or reload page." />}
            {(!isLoading && !hasError) && (meal && <MealDetailCard meal={meal} />)}

        </>
    );
}

export default MealDetail;
