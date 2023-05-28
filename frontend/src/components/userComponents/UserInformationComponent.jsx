import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImageByDefault from "./../../assets/image/by-default.jpg";
import { Col, Image, Row } from 'react-bootstrap';
import { UserUpdateComponent } from './UserUpdateComponent';


export const UserInformationComponent = ({ authUser }) => {

    const seller = authUser?.seller;
    const user = authUser?.user;

  

    return (
        <>
            <Row className='gap-2 d-flex justify-content-center'>
                <Col sm={12} md={6} xl={4}>

                    {user && (<UserUpdateComponent user={user}></UserUpdateComponent>)}

                </Col>
            </Row>

        </>
    );
};

