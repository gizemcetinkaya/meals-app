import axios from "axios";

export const getMealsByName = (searchKey) => {
    return axios.get(`search.php?s=${searchKey}`).then((res) => res.data.meals);
}

export const getMealsByCategory = (searchKey) => {
    return axios.get(`filter.php?c=${searchKey}`).then((res) => res.data.meals);
}