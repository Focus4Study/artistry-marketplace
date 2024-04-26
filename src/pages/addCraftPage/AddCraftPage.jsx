

const AddCraftPage = () => {
    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form className="container flex flex-col mx-auto space-y-12">
                    <div className="grid grid-cols-4 gap-5">

                        <label htmlFor="image" className="text-sm mr-5">Image</label>
                        <input id="image" type="text" placeholder="Image" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="item_name" className="text-sm mr-5">Item Name</label>
                        <input id="item_name" type="text" placeholder="Item Name" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="subcategory_Name" className="text-sm mr-5">Subcategory Name</label>
                        <input id="subcategory_Name" type="text" placeholder="Subcategory Name" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="short description" className="text-sm mr-5">Short Description</label>
                        <input id="short description" type="text" placeholder="Short Description" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="price" className="text-sm mr-5">Price</label>
                        <input id="price" type="number" placeholder="Price" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="rating" className="text-sm mr-5">Rating</label>
                        <input id="rating" type="number" placeholder="Rating" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="customization" className="text-sm mr-5">Customization</label>
                        <input id="customization" type="text" placeholder="Yes or No" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="processing_time" className="text-sm mr-5">Processing time</label>
                        <input id="processing_time" type="number" placeholder="Processing time" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="stockStatus" className="text-sm mr-5">Stock Status</label>
                        <input id="stockStatus" type="number" placeholder="Stock Status" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="User Email" className="text-sm mr-5">User Email</label>
                        <input id="User Email" type="email" placeholder="User Email" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    

                    
                        <label htmlFor="User Name" className="text-sm mr-5">User Name</label>
                        <input id="User Name" type="email" placeholder="User Name" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                </form>
                <input type="submit" className="btn" value="Submit" />
            </section>
        </div>
    );
};

export default AddCraftPage;