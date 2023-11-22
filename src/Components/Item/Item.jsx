const Item = (props) => {
    
    const {name, id, price, description} = props


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
                style={{ width: "18rem", margin: 20, height: "400px" }}
            >
                <Link to={`/item/${id}`}>
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
export default Item;
