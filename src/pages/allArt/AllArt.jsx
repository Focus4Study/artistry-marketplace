import { useLoaderData } from "react-router-dom";
import ArtCard from "../../shared/ArtCard";

const AllArt = () => {

    const items = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center lg:mb-10">The number of items in display is {items.length}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-y-7 lg:gap-x-14 mx-auto">
            {
                items.map(item=><ArtCard key={item._id} item={item}></ArtCard>)
            }
            </div>
        </div>
    );
};

export default AllArt;