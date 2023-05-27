import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImageByDefault from "./../../assets/image/by-default.jpg";
import { Col, Image, Row } from 'react-bootstrap';


export const UserInformationComponent = ({ authUser }) => {

    const seller = authUser?.seller;
    const user = authUser?.user;

    return (
        <>
            <Row className='gap-2'>
                <Col sm={12} md={12} xl={12}>

                    <Card className='py-2 text-center'>
                        <Card.Body >

                            <Row className='info-user' >
                                <Col sm={12} md={4} className='text-center'>
                                    <i class="bi bi-person-circle icon-style bi-5xl" style={{ fontSize: '8rem' }}></i>
                                </Col>
                                <Col sm={12} md={4} className='card-text-info'>
                                    <Card.Text as="h4">
                                        {user?.name}
                                    </Card.Text>
                                    <Card.Text>
                                        {user?.email}
                                    </Card.Text>
                                    <Card.Text>
                                        <Button type="submit" className='btn-hover btn-icon'> <i className="bi bi-pencil-square"></i></Button>
                                    </Card.Text>
                                    {

                                        seller && (
                                            <>
                                                <Card.Text>
                                                    {seller?.bussnessWebsite}
                                                </Card.Text>
                                                <Card.Text>
                                                    {seller?.bussnessType}
                                                </Card.Text>
                                                <Card.Text>
                                                    {seller?.bussnessPhone}
                                                </Card.Text>
                                                <Card.Text>
                                                    <Button type="submit" className='btn-hover btn-icon'> <i className="bi bi-pencil-square"></i></Button>
                                                </Card.Text>

                                            </>
                                        )
                                    }

                                </Col>

                            </Row>

                        </Card.Body>
                    </Card>

                </Col>
                {seller && (
                    <Col sm={12} md={12} xl={12} className='text-center'>
                        <Row className='info-card-seller'>
                            <Col sm={12} md={12} xl={6}>

                                <Card>
                                    <Card.Header>Mi trabajo</Card.Header>
                                    <Card.Body>
                                        <Card.Title> {seller?.bussnessType} </Card.Title>
                                        <Card.Text>
                                            {seller?.bussnessDescription}
                                        </Card.Text>
                                        <Card.Text>
                                            <Button type="submit" className='btn-hover btn-icon'> <i className="bi bi-pencil-square"></i></Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>


                            </Col>
                        </Row>


                    </Col>
                )}


            </Row>



        </>
    );
};

