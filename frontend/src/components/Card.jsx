import { craftyFileUrl } from "../api/FileApi";
import FirsetImage from "./../assets/image/carousel/modelado-alta-vista-arcilla-torno-alfarero.jpg";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Outlet } from "react-router-dom";


export const CardComponent = ({ props, linkTo, edit }) => {


    return (
        <>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={craftyFileUrl(props.imageId)} onError={(e) => { e.target.src = FirsetImage }} style={{ maxHeight: '178px' }} className="py-2" />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center">{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Link href={linkTo} className="d-flex justify-content-center fs-4" >Ver {props.name}</Card.Link>
                    <Card.Text className="btn-ico">
                        {edit && <Nav.Link as={NavLink} to={`/profile/seller/product/edit/${props.id}`}><i className="bi bi-pencil-square" style={{ fontSize: '1.5rem' }}></i></Nav.Link>}


                    </Card.Text>


                </Card.Body>
            </Card>

            <section className="h-90">

                <Outlet></Outlet>
            </section>


        </>
    );
};

