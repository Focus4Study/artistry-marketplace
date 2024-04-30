import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftItems from "./CraftItems";
import Accordian from "./Accordian";
import ArtCategories from "./ArtCategories";
import JoinUs from "./JoinUs";


const Home = () => {

    const items = useLoaderData()


    return (
        <div className="space-y-24">
            <Banner></Banner>
            <CraftItems items={items}></CraftItems>
            <ArtCategories items={items}></ArtCategories>
            <Accordian></Accordian>
            <JoinUs></JoinUs>
        </div>
    );
};

export default Home;