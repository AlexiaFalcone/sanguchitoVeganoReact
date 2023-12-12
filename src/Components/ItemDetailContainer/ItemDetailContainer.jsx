import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../hook/useProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState ({})
    const {id} = useParams ()
    
    useEffect (() => {
        getProductById (id)
        .then((elem) => setProducts(elem))
    }, [id])
    return(
        <ItemDetail {...products}/>
    )
}
export default ItemDetailContainer;