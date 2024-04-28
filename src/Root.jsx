import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Root = () => {
    return (
        <div>
            <div className="space-y-24">
                <Navbar></Navbar>
                <div className="container mx-auto">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;