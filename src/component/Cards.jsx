import Card from 'react-bootstrap/Card';

function Cards({name,username,email,address,phone,website,company}) {
  return <div className='mx-auto'>
    <Card style={{ width: '20rem',padding:"10px"}}>
      
    <Card.Img variant="top" style={{width:'10rem',marginLeft:'4rem'}} src="https://img.myloview.com/stickers/web-icons-set-web-design-icon-computer-and-mobile-icons-home-phone-website-mail-call-printer-chat-pin-map-person-700-201530656.jpg" />
      <Card.Body style={{textAlign:"center"}}>
        <Card.Text>Name:{name}</Card.Text>
        <Card.Text>UserName:{username}</Card.Text>
        <Card.Text>Email:{email}</Card.Text>
        <Card.Text>Address:{address}</Card.Text>
        <Card.Text>Phone:{phone}</Card.Text> 
        <Card.Text>Website:{website}</Card.Text>
        <Card.Text>Company:{company}</Card.Text>
       
        
      </Card.Body>
    </Card>
    </div>
}

export default Cards;