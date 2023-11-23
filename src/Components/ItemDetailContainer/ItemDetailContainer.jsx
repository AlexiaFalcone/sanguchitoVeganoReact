import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/productsData";

const itemDetailContainer = () => {
    const [products, setProducts] = useState ([])
    const {id} = useParams ()
    
    useEffect (() => {
        getProducts (id)
        .then((elem) => setProducts(elem))
    }, [id])
    return(
        <ItemDetail items= {products}/>
    )
}
export default itemDetailContainer;