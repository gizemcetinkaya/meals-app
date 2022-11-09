import axios from "axios";

export const getCategories = () => {
    return axios.get(`categories.php`).then((res) => res.data.categories);
}