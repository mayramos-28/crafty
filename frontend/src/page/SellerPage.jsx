import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { fetchProducts} from "../store/slices/ProductSlice";
import {  Nav } from "react-bootstrap";

import { SellerCreateComponent } from "../components/sellerComponents/SellerCreateComponent";
import { NavLink, Outlet } from "react-router-dom";

export const SellerPage = () => {
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const { authUser, UserLoading, Usererror } = useSelector((state) => state.authUser);
    
    const sellerId = authUser?.seller?.id;
    const userId = authUser?.user?.id;
    const user = authUser?.user;


    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);



    if ( !sellerId) {
        return (
            <>
                <div>
                    <h3 className="text-center">Bienvenido/a {user?.name} </h3>
                    <h4>No estás registrado como vendedor</h4>
                    <SellerCreateComponent userId={userId}></SellerCreateComponent>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="w-100">
                <Nav variant="tabs" >
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller">Mis datos de venta</Nav.Link>
                    </Nav.Item>                    
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller/newProduct">Añadir producto</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller/products/seller">Mis productos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller/sales">Mis ventas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/profile/seller/accounts">Cuentas de  cobro</Nav.Link>
                    </Nav.Item>
                </Nav>


                <section className="w-100 py-2">
                    <Outlet></Outlet>
                </section>


            </div>
            {/* <h2 className="text-center py-2 ">Mi perfil de vendedor</h2>
            <Row className="d-flex justify-content-center gap-2">
                <Col sm={12} md={8} lg={9}>
                    {seller && (<SellerUpdateComponent seller={seller}></SellerUpdateComponent>)}
                </Col>
            </Row>

            <div className="seller row">

             
                    <Card className="card-perfil col-lg-5 col-sm-12 col-md-6 ">
                        <Card.Body className="w-100" >                            
                                <div className={productCollapse ? "d-none w-100" : "d-block w-100"}
                                    onClick={() => setProductCollapse(!productCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={productCollapse}
                                    size="lg">
                                    <i className="bi bi-bag-plus" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }} >  Añadir Producto </i>
                                </div>
                                <div className={productCollapse ? "d-block" : "d-none"}
                                    onClick={() => setProductCollapse(!productCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={productCollapse}
                                    size="lg">
                                    <i className="bi bi-x-lg" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                                <Collapse in={productCollapse}>
                                    <div id="example-collapse-text">
                                        <h2>Añadir nuevo producto en venta</h2>
                                        <ProductCreateComponent sellerId={sellerId} ></ProductCreateComponent>

                                    </div>
                                </Collapse>
                                <div className={productCollapse ? "d-block" : "d-none"}
                                    onClick={() => setProductCollapse(!productCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={productCollapse}
                                    size="lg">
                                    <i className="bi bi-x-lg" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                        


                        </Card.Body>
                    </Card>
             

            
                    <Card className="card-perfil col-lg-5 col-md-6  col-sm-12">
                        <Card.Body clas>

                            <Card.Text>
                                <div className={accounts ? "d-none" : "d-block"}
                                    onClick={() => setAccounts(!accounts)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={accounts}
                                    size="lg">
                                    <i className="bi bi-wallet2 " style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }} >  Ver Cuentas de pago </i>
                                </div>
                                <div className={accounts ? "d-block" : "d-none"}
                                    onClick={() => setAccounts(!accounts)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={accounts}
                                    size="lg">
                                    <i className="bi bi-x-lg " style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                                <Collapse in={accounts}>
                                    <div id="example-collapse-text">

                                        <AccountSellerComponent sellerId={sellerId} />


                                    </div>
                                </Collapse>
                                <div className={accounts ? "d-block" : "d-none"}
                                    onClick={() => setAccounts(!accounts)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={accounts}
                                    size="lg">
                                    <i className="bi bi-x-lg " style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                            </Card.Text>


                        </Card.Body>
                    </Card>
             

                <Col sm={11}>
                    <Card className="card-perfil">
                        <Card.Body>

                            <Card.Text className="text-center ">
                                <div className={allProductsCollapse ? "d-none" : "d-block"}
                                    onClick={() => SetAllProductsCollapse(!allProductsCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={allProductsCollapse}
                                    size="lg">
                                    <i className="bi bi-bag" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }} >  Ver Productos </i>
                                </div>
                                <div className={allProductsCollapse ? "d-block" : "d-none"}
                                    onClick={() => SetAllProductsCollapse(!allProductsCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={allProductsCollapse}
                                    size="lg">
                                    <i className="bi bi-bag " style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                                <Collapse in={allProductsCollapse}>
                                    <div id="example-collapse-text-2">
                                        <h2>Mis productos en venta</h2>
                                        <div className="d-flex justify-content-center py-4 gap-2">
                                            {
                                                ProductLoading ? (
                                                    <Spinner animation="border" variant="danger" />
                                                ) : (
                                                    Products.map((product) => (
                                                        <CardComponent key={product.id} props={product} linkTo={`/products/${product.id}`} edit={true} />
                                                    ))
                                                )
                                            }


                                        </div>
                                    </div>


                                </Collapse>
                                <div className={allProductsCollapse ? "d-block" : "d-none"}
                                    onClick={() => SetAllProductsCollapse(!allProductsCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={allProductsCollapse}
                                    size="lg">
                                    <i className="bi bi-x-lg" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                            </Card.Text>


                        </Card.Body>
                    </Card>
                </Col>
            </div> */}


        </>
    )
}

