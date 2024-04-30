import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const ArtCategories = () => {

    const landScape = 'Landscape Painting'
    const portrait = 'Portrait Drawing'
    const watercolour = 'Watercolour Painting'
    const oil = 'Oil Painting'
    const charcoal = 'Charcoal Sketching'
    const cartoon = 'Cartoon Drawing'


    return (
        <div>

            <h2 className="text-3xl font-extrabold text-center lg:mb-10">All categories are shown below</h2>


            <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">

                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">


                    <Link to={`/category/${landScape}`}>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                    <img src={'https://i.ibb.co/sgnNxXS/Mountain-view-canvas.jpg'} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">Landscape Painting</p>
                            </div>
                        </div>
                    </Link>


                    <Link to={`/category/${portrait}`}>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                    <img src={'https://i.ibb.co/KWM9LyC/Pencil-Sketch-Portrait.jpg'} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">Portrait Drawing</p>
                            </div>
                        </div>
                    </Link>


                    <Link to={`/category/${watercolour}`}>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                    <img src={'https://i.ibb.co/gVDZNyg/Another-Animal-Watercolor-Portrait.jpg'} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">Watercolour Painting</p>
                            </div>
                        </div>
                    </Link>


                    <Link to={`/category/${oil}`}>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                    <img src={'https://i.ibb.co/pZ6CbcF/Realistic-Oil-Portrait.jpg'} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none"> Oil Painting</p>
                            </div>
                        </div>
                    </Link>


                    <Link to={`/category/${charcoal}`}>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                    <img src={'https://i.ibb.co/L6pKFD0/Figure-Charcoal-Sketch.jpg'} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">Charcoal Sketching</p>
                            </div>
                        </div>
                    </Link>


                    <Link to={`/category/${cartoon}`}>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                <img src={'https://i.ibb.co/ZhyBZB3/Another-Superhero-Cartoon-Design.jpg'} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">Cartoon Drawing</p>
                        </div>
                    </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};


ArtCategories.propTypes = {
    items: PropTypes.array,
};
export default ArtCategories;