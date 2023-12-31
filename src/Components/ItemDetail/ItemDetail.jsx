import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemQuantitySelector} from "../ItemQuantitySelector/ItemQuantitySelector";

const ItemDetail = ({ name, id, price, description, image }) => {
    return (
        <div className="styleCardDiv">
            <Card key={id} className='styleCardDetail'>
                <Link to={`/item/${id}`}>
                    <Card.Img variant="top" className="imgCard" src={image} />
                </Link>
                <Card.Body>
                    <div className="nameContainer">
                        <Card.Title className="nameCard">{name}</Card.Title>
                    </div>
                    <div className="priceContainer">
                        <Card.Text className="priceCard">${price}</Card.Text>
                    </div>
                    <div>
                        <Card.Text className="descriptionCard">{description}</Card.Text>
                    </div>
                </Card.Body>
                <ItemQuantitySelector />
            </Card>
        </div>
    )
}
export default ItemDetail;