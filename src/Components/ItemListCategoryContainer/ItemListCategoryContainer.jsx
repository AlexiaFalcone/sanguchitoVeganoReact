import { useParams } from "react-router-dom";
import { getElementByCategory } from "../../hook/useProducts";
import ItemListCategory from '../ItemListCategory/ItemListCategory';

const itemListCategoryContainer = () =>{
    const {categoryId} = useParams();
    const { products } = getElementByCategory(categoryId)  
  return(
   <ItemListCategory items= {products}/>
 );
 }
 export default itemListCategoryContainer;