import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../Components/NavBar/NavBar";
import Cartegory from "../pages/Category";
import Item from "../pages/Item";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<Item />} />
            </Routes>
        </BrowserRouter>
    )
};
export default MainRoutes;