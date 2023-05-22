import { Button } from "react-bootstrap";
import { craftyFileUrl } from "../api/FileApi";
import FirsetImage from "./../assets/image/carousel/modelado-alta-vista-arcilla-torno-alfarero.jpg";
import Card from 'react-bootstrap/Card';



export const CardComponent = ({ props, linkTo}) => {
   
    
    return (        
        <>
        <Card style={{ width: '18rem' }} className=" col-lg-4 col-md-2 col-sm-12 my-2">
            <Card.Img variant="top" src={craftyFileUrl(props.imageId)} onError={(e) => { e.target.src = FirsetImage }} style={{ maxHeight: '178px' }} className="py-2" />
            <Card.Body>
                <Card.Title className="d-flex justify-content-center">{props.name}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Card.Link href={linkTo}  className="d-flex justify-content-center fs-4" >Ver {props.name}</Card.Link> 
                           
            </Card.Body>
        </Card>

        </>
    );
};