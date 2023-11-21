import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { ProductsData } from "../data/productsData";

const Item = () => {
    const {id} = useParams();
    const ProductFiltered = ProductsData.filter((product) => product.id === parseInt(id));
    return <ItemListContainer product={ProductFiltered[0]} />;
};
export default Item;