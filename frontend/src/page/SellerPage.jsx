import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { CardComponent } from "../components/Card";
import { fetchProducts, selectAllProducts, selectProductError, selectProductLoading } from "../store/slices/ProductSlice";
import { Button, Card, Collapse } from "react-bootstrap";
import { ProductForms } from "../components/forms/productForm";
import { selectAllSellerAccount } from "../store/slices/SellerAccountSlice";
import { AccountSellerComponent } from "../components/accountSellerComponents/AccountSellerComponent";

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

    console.log('products', Products, 'user', authUser)


    if (authUser?.SellerRole == false) return (
        <>
            <h1>No estas dado de alta como vendedor</h1>
            <p>Esta seccion es solo para vendedores</p>
            {/* Luego aqui ira un redirect a un formulario / componente  para darse de alta */}
        </>
    )
    if (!sellerId) {
        return (
          <>
            <div>
              <p>No estás registrado como vendedor</p>
              <p>Dar de alta</p>              
            </div>
          </>
        )
      }

    return (
        <>
            <div className="perfil ">

                <h2 className="text-center">Mi perfil de vendedor</h2>

                <div className="row perfil-info">

                    <Card className="card-perfil">
                        <Card.Body>

                            <Card.Text className="text-center ">
                                <div className={productCollapse ? "d-none" : "d-block"}
                                    onClick={() => setProductCollapse(!productCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={productCollapse}
                                    size="lg">
                                    <i class="bi bi-bag-plus  icon-style" >  Añadir Producto </i>
                                </div>
                                <div className={productCollapse ? "d-block" : "d-none"}
                                    onClick={() => setProductCollapse(!productCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={productCollapse}
                                    size="lg">
                                    <i class="bi bi-x-lg icon-style" ></i>

                                </div>
                                <Collapse in={productCollapse}>
                                    <div id="example-collapse-text">
                                        <h2>Añadir nuevo producto en venta</h2>
                                        <ProductForms sellerId={sellerId} />

                                    </div>
                                </Collapse>
                                <div className={productCollapse ? "d-block" : "d-none"}
                                    onClick={() => setProductCollapse(!productCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={productCollapse}
                                    size="lg">
                                    <i class="bi bi-x-lg icon-style"></i>

                                </div>
                            </Card.Text>


                        </Card.Body>
                    </Card>

                    <Card className="card-perfil">
                        <Card.Body>

                            <Card.Text className="text-center ">
                                <div className={allProductsCollapse ? "d-none" : "d-block"}
                                    onClick={() => SetAllProductsCollapse(!allProductsCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={allProductsCollapse}
                                    size="lg">
                                    <i class="bi bi-bag icon-style" >  Ver Productos </i>
                                </div>
                                <div className={allProductsCollapse ? "d-block" : "d-none"}
                                    onClick={() => SetAllProductsCollapse(!allProductsCollapse)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={allProductsCollapse}
                                    size="lg">
                                    <i class="bi bi-bag icon-style"></i>

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
                                    <i class="bi bi-x-lg icon-style"></i>

                                </div>
                            </Card.Text>


                        </Card.Body>
                    </Card>


                    <Card className="card-perfil">
                        <Card.Body>

                            <Card.Text className="text-center ">
                                <div className={accounts ? "d-none" : "d-block"}
                                    onClick={() => setAccounts(!accounts)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={accounts}
                                    size="lg">
                                    <i class="bi bi-wallet2 icon-style" >  Ver Cuentas de pago </i>
                                </div>
                                <div className={accounts ? "d-block" : "d-none"}
                                    onClick={() => setAccounts(!accounts)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={accounts}
                                    size="lg">
                                    <i class="bi bi-x-lg icon-style"></i>

                                </div>
                                <Collapse in={accounts}>
                                    <div id="example-collapse-text">

                                        <p>Componente metodos de pago</p>

                                        <AccountSellerComponent sellerId={sellerId}/>


                                    </div>
                                </Collapse>
                                <div className={accounts ? "d-block" : "d-none"}
                                    onClick={() => setAccounts(!accounts)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={accounts}
                                    size="lg">
                                    <i class="bi bi-x-lg icon-style"></i>

                                </div>
                            </Card.Text>


                        </Card.Body>
                    </Card>

                    



                </div>
            </div>
        </>
    )
}

{/* 
//    pruebas
    const [open2, setOpen2] = useState(false);
//    pruebas

//preubas
    useEffect(() => {
        if (open2) {
            dispatch(fetchProducts({ sellerId }))
        }
    }, [dispatch, open2]);
//preubas
<div className="d-flex flex-column ">
                        <Button
                        className={open2 ? "d-none" : "d-block"}
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-collapse-text-2"
                            aria-expanded={open2}
                            size="lg"

                        >
                            Ver mis productos
                        </Button>

                        <Collapse in={open2}>
                            <div id="example-collapse-text-2">
                                <h2>Mis productos en venta</h2>
                                <div className="mainProducts d-flex justify-content-around py-4 px-4 row gap-2">
                                    {
                                        Products.map((product) => (<CardComponent key={product.id} props={product} linkTo={`/products/${product.id}`} ></CardComponent>))

                                    }
                                </div>
                            </div>

                            
                        </Collapse>
                        <Button
                            className={open2 ? "d-block" : "d-none"}
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open2}

                            size="lg"
                        >
                            Ocultar productos
                        </Button>
                    </div> */}