import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductsData } from "../../data/productsData";

const ItemList = () => {
    return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100vw",
            justifyContent: "space-around",
          }}
        >
          {ProductsData.map((product) => {
            return (
              <Card
                key={product.id}
                style={{ width: "18rem", margin: 20, height: "400px" }}
              >
                <Link to={`/item/${product.id}`}>
                </Link>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
    )
}
export default ItemList;

console.log(ItemList);