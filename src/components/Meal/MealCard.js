import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
    return (
        <div className="shadow-lg flex flex-wrap w-full mx-auto my-10" key={meal.idMeal}>
            <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative" style={{ backgroundImage: `url(${meal.strMealThumb})` }}>
                <div className="absolute text-xl">
                    <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                </div>
            </div>
            <div className="bg-white w-full md:w-2/3 min-h-[270px]">
                <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                    <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                        <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                            <h3>{meal.strMeal}</h3>
                            <p className="mb-0 mt-3 text-grey-dark text-sm italic">{meal.strArea}</p>
                        </div>

                        <div className="w-full lg:w-3/5 lg:px-3">
                            <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm truncate-more-line">
                                {meal.strInstructions}
                            </p>
                        </div>

                        <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                            <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal} className="mt-5">
                                <span className="relative inline-block text-sm font-medium text-white group active:text-pink-700 focus:outline-none focus:ring">
                                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-pink-700 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                                    <span className="relative block px-8 py-3 bg-rose-900 border border-current">Go Detail</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealCard;