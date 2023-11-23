import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail= ({ name, id, price, description, image }) =>{
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-around",
            }}
        >
            <Card
                key={id}
                style={{ width: "18rem", margin: 20, height: "300px" }}
            >
                <Link to={`/item/${id}`}>
                    <Card.Img variant="top" src={image} />
                </Link>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}
export default ItemDetail;