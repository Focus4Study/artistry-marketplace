import { useLoaderData, useParams } from "react-router-dom";
import ArtCard from "../../shared/ArtCard";


const Category = () => {

    const loadedItems = useLoaderData()
    const category = useParams()
    console.log(loadedItems);
    console.log(category);
    const items = loadedItems.filter(item => item.subcategory_Name == category.subcategory_Name)
    console.log(items);


    return (
        <div>
           
            <div>
                <h2  className="text-3xl font-extrabold text-center lg:mb-10">The number of available items for this category ={items.length}</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-y-7 lg:gap-x-14 mx-auto">
                    {
                        items.map(item => <ArtCard key={item._id} item={item}></ArtCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Category;