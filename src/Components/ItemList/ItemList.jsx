import React from "react";

const ItemList = (props) => {
  const productsList = props
  console.log(productsList)
  return(
    productsList.map((itemProduct) => <Item key= {itemProduct.id} item= {itemProduct} />)
  )
}
export default ItemList;

