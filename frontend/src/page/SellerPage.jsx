import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { CardComponent } from "../components/Card";
import { fetchProducts, selectAllProducts, selectProductError, selectProductLoading } from "../store/slices/ProductSlice";
import { Button, Collapse } from "react-bootstrap";

export const SellerPage = () => {

    const firstExecution = useRef(true);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const dispatch = useDispatch();

    const { authUser, UserLoading, Usererror } = useSelector((state) => state.authUser);
    const Products = useSelector(selectAllProducts);
    const Producterror = useSelector(selectProductError);
    const ProductLoading = useSelector(selectProductLoading);



    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            dispatch(fetchProducts(authUser?.user?.id))
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);

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
                    <div className="">
                        <Button 
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            size="lg"
                            
                            >
                            Add Product
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <p>aqui va un formulario para crear productos nuevos</p>
                        
                            </div>
                        </Collapse>
                    </div>

                    <div className="">
                        <Button 
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-collapse-text-2"
                            aria-expanded={open2}
                            size="lg"
                            
                            >
                            Ver mis productos
                        </Button>
                        <Collapse in={open2}>
                            <div id="example-collapse-text-2">
                                <p>aqui va algo mas</p>
                            <div className="mainProducts d-flex justify-content-around py-4 px-4 row gap-2">
                        {
                            Products.map((product) => (<CardComponent key={product.id} props={product} linkTo={`/products/${product.id}`} ></CardComponent>))
                           
                        }
                          </div>
                            </div>
                        </Collapse>
                    </div>

                </div>

            </div>
        </>
    )
}