import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';


const MyCard = ({ item, items, setItems }) => {
    const { user } = useContext(AuthContext)
    const { _id, image, item_name, subcategory_Name,
        short_description, price, rating, stockStatus, customization } = item

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://artistry-marketplace.vercel.app/craftItem/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            const left = items.filter(item=> item._id !== _id)
                            setItems(left)
                        }
                    })
            }
        });
    }

    // console.log(item);
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md dark:bg-gray-50 dark:text-gray-900">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{subcategory_Name}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{item_name}</h2>
                </div>
                <p className="dark:text-gray-800">{short_description.slice(0, 100)}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p>In stock: {stockStatus}</p>
                <p>Customization: {customization}</p>

                <Link to={`/cardDetails/${_id}`}>
                    <button className='btn w-full px-8 py-3 font-semibold bg-[#D04848] text-[#F7EEDD] rounded-md dark:bg-violet-600 dark:text-gray-50 mb-3 mt-3'>Details</button>
                </Link>

                {
                    user.email == item.user.email ? <Link to={`/update/${_id}`}>
                        <button className='btn w-full px-8 py-3 font-semibold bg-[#D04848] text-[#F7EEDD] rounded-md dark:bg-violet-600 dark:text-gray-50 mb-3 mt-3'>Update</button>
                    </Link> : <></>
                }
                {
                    user.email == item.user.email ?
                        <button onClick={() => handleDelete(_id)} className='btn w-full px-8 py-3 font-semibold bg-[#D04848] text-[#F7EEDD] rounded-md dark:bg-violet-600 dark:text-gray-50 mb-3 mt-3'>Delete</button>
                        : <></>
                }

            </div>

        </div>
    );
};

MyCard.propTypes = {
    item: PropTypes.object,
    items: PropTypes.object,
    setItems: PropTypes.fund
};

export default MyCard;