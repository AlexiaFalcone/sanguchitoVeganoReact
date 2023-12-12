import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getElementByCategory, getProducts} from "../hook/useProducts";
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () =>{
 const [products, setProducts] = useState ([])
 const {categoryId} = useParams ()

 useEffect (() => {
  if (categoryId) {
    getElementByCategory (categoryId)
     .then ((elem) => setProducts(elem))
  } else{
    getProducts()
     .then ((elem) => setProducts(elem))
  }
 }, [categoryId])
 
 return(
  <ItemList items= {products}/>
);
}
export default ItemListContainer;
