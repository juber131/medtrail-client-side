import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className='md:pt-24 pt-16 min-h-[calc(100vh-68px)] '>
                    <Outlet />
                </div>
            </div>

            <div className="">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;