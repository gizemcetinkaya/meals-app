import YoutubeEmbed from "../UI/Card/YoutubeEmbed";

const MealDetailCard = ({ meal }) => {
    return (
        <div className="lg:px-0 my-5 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed px-2" key={meal.id}>
            <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg mb-6 rounded-lg" style={{ height: '24em' }}>
                <img src={meal.img} alt="" className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
            </div>
            <div className="pb-2">
                <h2 className="text-lg mb-1">
                    {meal.name}
                </h2>
                <p className="text-sm">{meal.area}</p>
                <div className="mt-3">
                    {meal.tags && meal.tags.map((tag) => (
                        <div key={tag} className="inline-block bg-rose-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#{tag}</div>
                    ))
                    }
                </div>
            </div>
            {
                meal.measuresWithIngredients &&
                <>
                    <h5>Ingredients</h5>
                    <ul className="list-disc list-inside text-slate-700 mt-3 text-sm">
                        {
                            meal.measuresWithIngredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))
                        }
                    </ul>
                </>
            }
            {
                meal.youtubeId && <YoutubeEmbed embedId={meal.youtubeId} />
            }
            <div className="mt-5 mb-10">
                <h3>How to?</h3>
                <p className="mt-2 mb-6 text-sm">{meal.instructions}</p>
            </div>

        </div>
    )
}

export default MealDetailCard;