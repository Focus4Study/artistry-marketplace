import { Link, NavLink } from "react-router-dom";
import '../App.css'
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)




    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <button className="mr-3 border-0"><NavLink className={'px-5 py-3'} to={'/'}>Home</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'px-5 py-3'} to={'/all-art-craft'}>All Art & craft Items</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'px-5 py-3'} to={'/add-craft-page'}>Add Craft Item</NavLink></button>
        <button className="mr-3 border-0"><NavLink className={'px-5 py-3'} to={`/my-art-list`}>My Art&Craft List</NavLink></button>
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
                    <a className="btn btn-ghost text-xl"><span className="text-[#D04848]">Artistry</span> Marketplace</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end gap-5">
                            <button onClick={handleSignOut} className="btn bg-[#D04848] text-[#F7EEDD]">SignOut</button>
                                <div data-tip={user.displayName} className="tooltip tooltip-bottom w-11 ">
                                    <img className="rounded-full" src={user.photoURL}/>
                                </div> 
                        </div>


                        :
                <div className="navbar-end">
                    <button className="btn text-white font-bold bg-[#D04848] mr-3 border-0"><Link className={'px-5 py-3'} to={'/login'}>Login</Link></button>
                    <button className="btn text-white font-bold bg-[#D04848]  mr-3 border-0"><Link className={'px-5 py-3'} to={'/register'}>Register</Link></button>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;