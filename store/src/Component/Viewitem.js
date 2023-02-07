import Card from 'react-bootstrap/Card'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
 
function Viewitem() { 
  return ( 
    <Card style={{ width: '18rem' }} className='card1'> 
      <Card.Img variant="top" src="https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2022/09/28/1600/800/7bf4bcd3935de24cf53201a93c1f4e0c.jpg?mod=v1_40e763c91506132793778dcf5a0b7f92" /> 
      <Card.Body> 
        <Card.Title>Card Title</Card.Title> 
        <Card.Text> 
          Some quick example text to build on the card title and make up the 
          bulk of the card's content. 
        </Card.Text> 
      </Card.Body> 
      <ListGroup className="list-group-flush"> 
        <ListGroup.Item>Cras justo odio</ListGroup.Item> 
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item> 
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> 
      </ListGroup> 
      <Card.Body> 
        <Card.Link href='./editP.js'>Edit</Card.Link> 
        {/* <Card.Link href="#">Another Link</Card.Link> */} 
      </Card.Body> 
    </Card> 
  ); 
} 
 
export default Viewitem;