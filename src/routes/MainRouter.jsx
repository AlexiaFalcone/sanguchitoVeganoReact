import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import ItemListCategoryContainer from "../Components/ItemListCategoryContainer/ItemListCategoryContainer";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";

const MainRoutes = () => {
    return (
        <BrowserRouter>
          
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListCategoryContainer />} />
                {/*<Route path="/item/:id" element={<ItemDetailContainer />} /> */}
            </Routes>
        </BrowserRouter>
    )
};
export default MainRoutes;