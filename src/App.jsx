import AboutUs from "./pages/AboutUs";
import OurWork from './pages/OurWork';
import ContactUs from "./pages/ContactUs";
import Nav from "./components/nav";
import Moviedetail from "./pages/Moviedetail";
import './components/style.css';
//ROUTE
import { Route,Routes,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/scrollTop";
const App=()=>{
const location = useLocation();

    return (
        <div className="flex ">
            <ScrollToTop />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Nav/>}>
                        <Route index element={<AboutUs/>}/>
                        <Route path="work" element={<OurWork/>}/>
                        <Route path="contact" element={<ContactUs/>}/>
                        <Route path="work/:id" element={<Moviedetail/>}/>
                    </Route>
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App;