import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true)
  const { categoryId } = useParams();

  useEffect(() => {


    const db = getFirestore();
    const getData = async () => {
      const queryRef = !categoryId
        ? collection(db, "products")
        : query(
          collection(db, "products"),
          where("category", "==", categoryId)
        );

      const response = await getDocs(queryRef);
      const productos = response.docs.map((doc) => {
        doc.data()
        const newProduct = {
          ...doc.data(),
          id: doc.id,
        };
        return newProduct;

      })
      setTimeout(() => {
        setProducts(productos);
      }, 100)
    };
    getData()
    .catch(() => setError(true))
    .finally(() => setLoading(false))
  }, [categoryId]);
  return (
    <ItemList items={products} loader={loading}/>
  );
}
export default ItemListContainer;
