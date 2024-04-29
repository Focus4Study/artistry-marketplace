import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';





const ArtCard = ({ item }) => {

    const { _id,image, item_name, subcategory_Name,
        short_description, price, rating, stockStatus, } = item
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
                
                <Link to={`/cardDetails/${_id}`}>
                    <button className='btn w-full px-8 py-3 font-semibold bg-[#D04848] text-[#F7EEDD] rounded-md dark:bg-violet-600 dark:text-gray-50 mb-3 mt-3'>Details</button>
                </Link>

            </div>

        </div>
    );
};


ArtCard.propTypes = {
    item: PropTypes.object
};

export default ArtCard;