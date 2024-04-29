
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {


    const items = useLoaderData();
    const _id = useParams();


    const item = items.find(item => item._id == _id.id)
    console.log(item);

    const { image, item_name, subcategory_Name,
        short_description, price, rating, stockStatus } = item

    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container items-center flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
                    <div className="flex justify-center p-6 mt-8 lg:mt-0 ">
                        <img src={image} alt="" className="object-contain sm:h-80 w-full  lg:h-[800px] rounded-xl" />
                    </div>
                    <div className="px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl tracking-wide">
                            {item_name}
                        </h1>
                        <div className="flex items-center gap-4 mt-5">
                            <div className="badge badge-outline border-[#D04848] text-[#D04848] gap-2 py-3 px-5">
                                {subcategory_Name}
                            </div>

                            <div className="badge badge-outline border-[#D04848] text-[#D04848] gap-2 py-3 px-5">
                                <span>Rating: {rating}</span>
                            </div>

                            <div className="badge badge-outline border-[#D04848] text-[#D04848] gap-2 py-3 px-5">
                                <span>Stock Status: {stockStatus}</span>
                            </div>
                        </div>
                        <p className="mt-6 mb-8 sm:mb-12">
                            {short_description}
                        </p>
                        <div className="flex gap-x-5">

                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <button className="px-8 py-3 text-lg font-semibold rounded bg-[#D04848] text-[#F7EEDD] dark:bg-violet-600 dark:text-gray-50">Buy for only: {price}$</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CardDetails;