import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { selectProductById, fetchShowProduct } from "./../store/slices/ProductSlice";
import { Card, Container } from "react-bootstrap";
import { craftyFileProductUrl } from "../api/FileApi";
import imgByDefault from "./../assets/image/by-default.jpg";

export const ProductDetailPage = () => {
    const firstExecution = useRef(true);
    const dispatch = useDispatch();

    const { productId } = useParams();
    const product = useSelector(state => selectProductById(state, productId))

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchShowProduct(productId))
            firstExecution.current = false;
        }

    }, [dispatch, firstExecution]);


    // const product = llamada a la api con el id del producto

    return (
        <Container className="py-5 flex-grow-1">
            <div className="row justify-content-center g-2">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h1 className="">{product?.name}</h1>
                    
                    <h2>{product?.price} €</h2>
                    <p>Stock: {product?.stock}</p>
                    <p> {product?.description}</p>

                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <Card.Img variant="top" src={craftyFileProductUrl(product?.imageId)} onError={(e) => { e.target.src = imgByDefault }} style={{}} className="py-2" />
                </div>
                </div>
           
        </Container>
    );

};