import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { CardComponent } from "../components/Card";
import { fetchProducts, selectAllProducts, selectProductError, selectProductLoading } from "../store/slices/ProductSlice";
import { Card, Col, Collapse, Row } from "react-bootstrap";
import { selectAllSellerAccount } from "../store/slices/SellerAccountSlice";
import { AccountSellerComponent } from "../components/accountSellerComponents/AccountSellerComponent";
import { SellerForm } from "../components/sellerComponents/SellerFormComponent";
import { ProductCreateComponent } from "../components/ProductComponents/ProductCreateComponent";
import { SellerCreateComponent } from "../components/sellerComponents/SellerCreateComponent";
import { SellerUpdateComponent } from "../components/sellerComponents/SellerUpdateComponent";

export const SellerPage = () => {
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const [productCollapse, setProductCollapse] = useState(false);
    const [allProductsCollapse, SetAllProductsCollapse] = useState(false);
    const [accounts, setAccounts] = useState(false);


    const { authUser, UserLoading, Usererror } = useSelector((state) => state.authUser);
    const Products = useSelector(selectAllProducts);
    const Producterror = useSelector(selectProductError);
    const ProductLoading = useSelector(selectProductLoading);
    const sellerAcounts = useSelector(selectAllSellerAccount);


    const sellerId = authUser?.seller?.id;
    const userId = authUser?.user?.id;
    const user = authUser?.user;
    const seller = authUser?.seller;

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);

    useEffect(() => {
        if (allProductsCollapse) {
            dispatch(fetchProducts({ sellerId }))
        }
    }, [dispatch, allProductsCollapse]);





    if (!sellerId) {
        return (
            <>
                <div>
                    <h3 className="text-center">Bienvenido {user?.name} No estás registrado como vendedor</h3>
                    <p>Dar de alta</p>
                    <SellerCreateComponent userId={userId}></SellerCreateComponent>
                </div>
            </>
        )
    }

    return (
        <>
            <h2 className="text-center py-2 ">Mi perfil de vendedor</h2>
            <Row className="d-flex justify-content-center gap-2">
            <Col sm={12} md={8} lg={9}>
                {seller && ( <SellerUpdateComponent seller={seller}></SellerUpdateComponent>)}
                    </Col>
            </Row>

            <Row className="seller">

                <Col sm={12} md={5} xl={5} >
                    <Card className="card-perfil">
                        <Card.Body>

                            <Card.Text >
                                <div className={productCollapse ? "d-none" : "d-block"}
                                    onClick={() => setProductCollapse(!productCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={productCollapse}
                                    size="lg">
                                    <i class="bi bi-bag-plus" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }} >  Añadir Producto </i>
                                </div>
                                <div className={productCollapse ? "d-block" : "d-none"}
                                    onClick={() => setProductCollapse(!productCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={productCollapse}
                                    size="lg">
                                    <i class="bi bi-x-lg" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

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
                                    <i class="bi bi-x-lg" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                            </Card.Text>


                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} md={5} xl={5}>
                    <Card className="card-perfil">
                        <Card.Body>

                            <Card.Text>
                                <div className={accounts ? "d-none" : "d-block"}
                                    onClick={() => setAccounts(!accounts)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={accounts}
                                    size="lg">
                                    <i class="bi bi-wallet2 " style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }} >  Ver Cuentas de pago </i>
                                </div>
                                <div className={accounts ? "d-block" : "d-none"}
                                    onClick={() => setAccounts(!accounts)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={accounts}
                                    size="lg">
                                    <i class="bi bi-x-lg " style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                                <Collapse in={accounts}>
                                    <div id="example-collapse-text">

                                        <p>Componente metodos de pago</p>

                                        <AccountSellerComponent sellerId={sellerId} />


                                    </div>
                                </Collapse>
                                <div className={accounts ? "d-block" : "d-none"}
                                    onClick={() => setAccounts(!accounts)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={accounts}
                                    size="lg">
                                    <i class="bi bi-x-lg " style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                            </Card.Text>


                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} md={12} xl={10}>
                    <Card className="card-perfil">
                        <Card.Body>

                            <Card.Text className="text-center ">
                                <div className={allProductsCollapse ? "d-none" : "d-block"}
                                    onClick={() => SetAllProductsCollapse(!allProductsCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={allProductsCollapse}
                                    size="lg">
                                    <i class="bi bi-bag" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }} >  Ver Productos </i>
                                </div>
                                <div className={allProductsCollapse ? "d-block" : "d-none"}
                                    onClick={() => SetAllProductsCollapse(!allProductsCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={allProductsCollapse}
                                    size="lg">
                                    <i class="bi bi-bag " style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                                <Collapse in={allProductsCollapse}>
                                    <div id="example-collapse-text-2">
                                        <h2>Mis productos en venta</h2>
                                        <div className="mainProducts d-flex justify-content-around py-4 px-4 row gap-2">
                                            {
                                                Products.map((product) => (<CardComponent key={product.id} props={product} linkTo={`/products/${product.id}`} ></CardComponent>))

                                            }
                                        </div>
                                    </div>


                                </Collapse>
                                <div className={allProductsCollapse ? "d-block" : "d-none"}
                                    onClick={() => SetAllProductsCollapse(!allProductsCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={allProductsCollapse}
                                    size="lg">
                                    <i class="bi bi-x-lg" style={{ fontSize: '2rem', color: 'rgb(104, 14, 14)' }}></i>

                                </div>
                            </Card.Text>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </>
    )
}

