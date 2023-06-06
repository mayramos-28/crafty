import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts, selectProductLoading } from "../store/slices/ProductSlice";
import { Spinner } from "react-bootstrap";
import { CardComponent } from "../components/Card";
import { fetchAuthUser } from "../store/slices/authUserSlice";

export const ShowSellerProducts = () => {
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const { authUser } = useSelector((state) => state.authUser);
    const products = useSelector(selectAllProducts);
    const isLoading = useSelector(selectProductLoading);
   

    const sellerId = authUser?.seller?.id;

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);

    useEffect(() => {
        if (authUser) {
            dispatch(fetchProducts({ sellerId }))
        }
    }, [dispatch, authUser]);

    if(products.length === 0){
        return(
            <div>
                <h3>No tienes productos en venta</h3>                

            </div>)
    }

    return (
        <>
            <h2>Mis productos en venta</h2>
            <div className="d-flex justify-content-center py-4 gap-2">
                {
                    isLoading ? (
                        <Spinner animation="border" variant="danger" />
                    ) : (
                        products.map((product) => (
                            <CardComponent key={product.id} props={product} linkTo={`/products/${product.id}`} edit={true}  />
                        ))
                    )
                }


            </div>
        </>
    )
};