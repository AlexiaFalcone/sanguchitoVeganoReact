import { useState, useEffect } from 'react';
import {collection, getDocs, getFirestore, getDoc, doc, query, where} from 'firebase/firestore';

export const getProducts = () =>{
    const [products, setProducts] = useState ([]);
    const [error, setError] = useState (false);

    useEffect(() =>{
        const db = getFirestore();
        const productsCollection = collection (db, 'products')

        getDocs(productsCollection).then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
            setProducts (data);
        }).catch(() => setError(true))
    }, []);
    return {products, error};

};

export const getProductById = () =>{
    const [products, setSingleProduct] = useState ({});
    const [error, setError] = useState (false);

    useEffect(() =>{
        const db = getFirestore();
        const dbProduct = collection (db, 'products', id)

        getDoc(dbProduct).then((snapshot) => {
            setSingleProduct ({id: snapshot.id, ...doc.data()});
        }).catch(() => setError(true))
    }, []);
    return {products, error};

};

export const getElementByCategory = (categoryId) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
  
    useEffect(() => {
        const db = getFirestore();
        const collectionRef = (db, "products");
        const categoryQuery = query(collectionRef, where("category", "==", categoryId))      
        
        getDocs(categoryQuery).then((res) =>{
            const data = res.data.map((doc) =>({id: doc.id, ...doc.data()}));
            setProducts(data)
        }).catch((error)=> setError(false))
    }, [categoryId]);
  
    return { products, error };
  };