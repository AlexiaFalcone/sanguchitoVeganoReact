import { getProducts } from '../../hooks/useProducts';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () =>{
   const { products } = getProducts()  
 return(
  <ItemList items= {products}/>
);
}
export default ItemListContainer;
