import Card from 'react-bootstrap/Card';

export const SellerInformationPage = ( {sellerInformation}) =>{
 const {businessDescription, businessPhone, businessWebsite, businessType, user} = sellerInformation;

 //conseguir nombre del vendedor y su direccion
    return (
    <Card>
      <Card.Header >Sobre el vendedor: </Card.Header>
      <Card.Body>
      <Card.Title>Empresa {user?.name}</Card.Title>
      <Card.Text>
         {businessType}
        </Card.Text>
        <Card.Text>
            {businessDescription}
        </Card.Text>
        <Card.Text>
            <p>Conctacto</p>
            <p>{user?.email}</p>
            <p>{businessPhone}</p>
            <p>{businessWebsite}</p>
        </Card.Text>    
        
           
      </Card.Body>
    </Card>
  );
}

