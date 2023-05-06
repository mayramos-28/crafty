import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { CardComponent } from "../components/Card";
import { fetchProducts, selectAllProducts, selectProductError, selectProductLoading } from "../store/slices/ProductSlice";
import { Button, Collapse } from "react-bootstrap";
import { ProductForms } from "../components/forms/productForm";

export const SellerPage = () => {

    const firstExecution = useRef(true);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const dispatch = useDispatch();

    const { authUser, UserLoading, Usererror } = useSelector((state) => state.authUser);
    const Products = useSelector(selectAllProducts);
    const Producterror = useSelector(selectProductError);
    const ProductLoading = useSelector(selectProductLoading);

    const sellerId = authUser?.seller?.id;

    useEffect(() => {
        if (firstExecution.current) {
            console.log("wiiii")
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);

    useEffect(() => {
        if (open2) {
            dispatch(fetchProducts({ sellerId }))
        }
    }, [dispatch, open2]);

    if (authUser?.SellerRole == false) return (
        <>
            <h1>No estas dado de alta como vendedor</h1>
            <p>Esta seccion es solo para vendedores</p>
            {/* Luego aqui ira un redirect a un formulario / componente  para darse de alta */}
        </>
    )

    return (
        <>
            <div className="container">
                <div className="d-flex flex-column gap-2 py-2">
                    <div className="d-flex flex-column ">


                        <Button className={open ? "d-none" : "d-block"}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            size="lg"
                        >
                            Desplegar formulario para Añadir Producto
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <h2>Añadir nuevo producto en venta</h2>
                                <ProductForms sellerId={sellerId} />

                            </div>
                        </Collapse>

                        <Button
                            className={open ? "d-block" : "d-none"}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}

                            size="lg"
                        >
                            Plegar Formulario
                        </Button>

                    </div>
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
                    </div>

                </div>

            </div>
        </>
    )
}