import axios from "axios";

export const getRandomMeal = () => {
    return axios.get(`random.php`).then((res) => res.data.meals);
}

const mapMeal = meal => {
    const ingredients = Object.entries(meal).filter(([key, value]) => key.includes('strIngredient') && (value !== '' && value !== null)).map(([key, value]) => value);
    // console.log(ingredients);
    const measures = Object.entries(meal).filter(([key, value]) => key.includes('strMeas') && (value !== '' && value !== null)).map(([key, value]) => value);
    // console.log(measures);
    return {
        id: meal.idMeal,
        name: meal.strMeal,
        area: meal.strArea,
        img: meal.strMealThumb,
        instructions: meal.strInstructions,
        youtubeId: meal.strYoutube.split("v=")[1],
        tags: meal.strTags?.length > 0 ? meal.strTags.split(',') : [],
        ingredients,
        measures,
        measuresWithIngredients: ingredients.map((i, index) => `${measures[index]} ${i}`)
    }
};


export const getMeal = (mealId) => {
    return axios.get(`lookup.php?i=${mealId}`).then(({ data: { meals } }) => meals.map(mapMeal));
}