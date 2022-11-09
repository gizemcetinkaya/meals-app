import Card from "../UI/Card/Card";

const CategoryList = ({ categories = [] }) => {
    return (
        <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            {categories.map((category) => (
                <Card
                    key={category.idCategory}
                    title={category.strCategory}
                    inst={category.strCategoryDescription}
                    img={category.strCategoryThumb}
                    url={`/category/${category.strCategory}`}
                />
            ))}
        </div>
    )
}

export default CategoryList;