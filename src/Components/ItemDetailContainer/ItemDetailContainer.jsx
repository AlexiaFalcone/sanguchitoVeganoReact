import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setSingleProduct] = useState({})
    const [error, setError] = useState (false);
    
    useEffect(() => {
        const db = getFirestore();
        const dbProduct = collection(db, 'products', id)

        getDoc(dbProduct)
        .then((res) => {  
            const dataProd = {
                id: res.id,
                ...res.data(),
            };
            setSingleProduct(dataProd)
        }).catch(() => setError(true))
    }, []);
    return (
        <ItemDetail {...product} />
    )
}
export default ItemDetailContainer;