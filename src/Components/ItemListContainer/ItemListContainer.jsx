import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getElementByCategory } from '../../data/productsData';

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
}
export default ItemListContainer;
