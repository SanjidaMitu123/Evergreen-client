
import { Outlet } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import Footer from '../nav/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;