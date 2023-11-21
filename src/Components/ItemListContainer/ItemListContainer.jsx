import './ItemListContainer.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemListContainer = ({product}) =>{
    return(
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
            {product.description}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      );
    };
export default ItemListContainer;