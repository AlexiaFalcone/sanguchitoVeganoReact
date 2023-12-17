import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setSingleProduct] = useState({})
    const [error, setError] = useState (false);
    const {id} = useParams ()
    
    useEffect(() => {
        const db = getFirestore();
        const dbProduct = doc(db, 'products', id)

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