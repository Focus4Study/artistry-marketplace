import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyCard from "./MyCard";


const MyArtList = () => {



    const { user } = useContext(AuthContext)
    const loadedItems = useLoaderData();
    const email = user.email
    const [items, setItems]= useState(loadedItems)

    const userAdded = items.filter(item => item.user.email == email)
    console.log(userAdded);

    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center lg:mb-10" >The number of items in display is {items.length}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-y-7 lg:gap-x-14 mx-auto">
            {
                userAdded.map(item=> <MyCard key={item._id} item={item} items={items} setItems={setItems}></MyCard>)
            }
            </div>
        </div>
    );
};

export default MyArtList;