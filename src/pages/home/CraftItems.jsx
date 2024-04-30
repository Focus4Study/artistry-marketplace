import PropTypes from 'prop-types';
import ArtCard from '../../shared/ArtCard';

const CraftItems = (items) => {


    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center lg:mb-10">Crafted Items here</h2>


            <div className='grid lg:grid-cols-3 mx-auto'>
                {
                 items.items.slice(0,6).map(item=><ArtCard key={item._id} item={item}></ArtCard>)  
                }
            </div>
        </div>
    );
};

CraftItems.propTypes = {
    items: PropTypes.array,
};

export default CraftItems;