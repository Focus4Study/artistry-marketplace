import { Link } from "react-router-dom";

const JoinUs = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/L6pKFD0/Figure-Charcoal-Sketch.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Join us and show off you own art to the world with our help. Do not let your talent be overlooked. Even if you are just a novice you can still do something great. Remember the first step is the hardest</p>
                        <button className="btn rounded-md text-sm lg:text-lg text-white lg:font-bold bg-[#D04848]  mr-3 border-0"><Link className={'p-3 lg:px-5 lg:py-3'} to={'/register'}>Register</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;