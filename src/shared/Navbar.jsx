import { Link, NavLink } from "react-router-dom";
import '../App.css'

const Navbar = () => {


    const links = <>
        <button className="mr-3 border-0"><NavLink className={'px-5 py-3'} to={'/'}>Home</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'px-5 py-3'} to={'/'}>All Art & craft Items</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'px-5 py-3'} to={'/'}>Add Craft Item</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'px-5 py-3'} to={'/'}>My Art&Craft List</NavLink></button>
    </>



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Artistry Marketplace</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="mr-3 border-0"><Link className={'px-5 py-3'} to={'/login'}>Login</Link></button>
                    <button className="mr-3 border-0"><Link className={'px-5 py-3'} to={'/register'}>Register</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;