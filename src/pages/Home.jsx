import React from "react";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { ProductsData } from "../data/productsData";


const Home = () => {

    return <ItemListContainer products ={ProductsData} />
}
export default Home;