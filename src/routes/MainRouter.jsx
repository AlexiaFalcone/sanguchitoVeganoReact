import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
};
export default MainRoutes;