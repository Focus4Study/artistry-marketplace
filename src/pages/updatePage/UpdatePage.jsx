import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthProvider';
import { useLoaderData } from 'react-router-dom';


const UpdatePage = () => {

    const item = useLoaderData()
    const { _id,image, item_name, subcategory_Name,
        short_description, price, rating, stockStatus,customization } = item
    const { user } = useContext(AuthContext)
    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value
        const email = form.email.value
        const image = form.image.value
        const item_name = form.item_name.value
        const subcategory_Name = form.subcategory_Name.value
        const short_description = form.short_description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processing_time = form.processing_time.value
        const stockStatus = form.stockStatus.value

        const updatedItem = { name, email, image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, user }
        console.log(updatedItem);

        // send information to server
        fetch(`http://localhost:5000/craftItem/${_id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully updated your item',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                    })
                    form.reset()
            }
        })
    }

    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
                    <div className="grid grid-cols-4 gap-5 items-center">

                        <label htmlFor="image" className="text-sm mr-5">Image</label>
                        <input name="image" id="image" type="text" placeholder="Image" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />



                        <label htmlFor="item_name" className="text-sm mr-5">Item Name</label>
                        <input name="item_name" id="item_name" type="text" placeholder="Item Name" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />



                        <label htmlFor="subcategory_Name" className="text-sm mr-5">Subcategory Name</label>
                        <input name="subcategory_Name" id="subcategory_Name" type="text" placeholder="Subcategory Name" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />



                        <label htmlFor="short description" className="text-sm mr-5">Short Description</label>
                        {/* <input name="short_description" id="short description" type="text" placeholder="Short Description" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" /> */}
                        <textarea name="short_description" id="" cols="50" rows="10" type="text" placeholder="Short Description" className="input input-bordered col-span-3 w-full max-w-xs h-28 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" ></textarea>



                        <label htmlFor="price" className="text-sm mr-5">Price</label>
                        <input name="price" id="price" type="number" placeholder="Price" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />



                        <label htmlFor="rating" className="text-sm mr-5">Rating</label>
                        <input name="rating" id="rating" type="number" placeholder="Rating" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />



                        <label htmlFor="customization" className="text-sm mr-5">Customization</label>
                        <input name="customization" id="customization" type="text" placeholder="Yes or No" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />



                        <label htmlFor="processing_time" className="text-sm mr-5">Processing time</label>
                        <input name="processing_time" id="processing_time" type="number" placeholder="Processing time" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />



                        <label htmlFor="stockStatus" className="text-sm mr-5">Stock Status</label>
                        <input name="stockStatus" id="stockStatus" type="number" placeholder="Stock Status" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />

                        <label htmlFor="User Name" className="text-sm mr-5">User Name</label>
                        <input name="name" id="user_name" type="text" placeholder="User Name" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />


                        <label htmlFor="User Email" className="text-sm mr-5">User Email</label>
                        <input name="email" id="user_email" type="email" placeholder="User Email" className="input input-bordered col-span-3 w-full max-w-xs focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <input type="submit" className="btn text-white font-bold bg-[#D04848]" value="Update" />
                    
                </form>
            </section>
        </div>
    );
};

export default UpdatePage;