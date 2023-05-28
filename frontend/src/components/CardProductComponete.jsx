import { Button } from "react-bootstrap";
import { craftyFileUrl } from "../api/FileApi";
import FirsetImage from "./../assets/image/carousel/modelado-alta-vista-arcilla-torno-alfarero.jpg";
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/slices/CartSlice";
import { useEffect } from "react";
import { starHtml } from "../store/slices/ProductSlice";



export const CardProductComponent = ({ props, linkTo }) => {

    const { name, price, id } = props;

    const dispatch = useDispatch();


    const handleAddToCart = () => {
        const productItem = { productId: id, name: name, price, quantity: 1 };        
        dispatch(addItemToCart(productItem));
    };

    const handleRemoveFromCart = () => {
        const productItem = { productId: id, name: name, price, quantity: -1 };
        dispatch(removeItemFromCart(productItem));
        
    };

    const ratingStart = starHtml(props?.rating);
    
    

    return (
        <>
            <Card style={{ width: '18rem' }} className=" col-lg-4 col-md-2 col-sm-12 my-2">
                <Card.Img variant="top" src={craftyFileUrl(props.imageId)} onError={(e) => { e.target.src = FirsetImage }} style={{ maxHeight: '178px' }} className="py-2" />
                <Card.Body>
 

                    <Card.Link href={linkTo} className="d-flex justify-content-center fs-4" >Ver {props.name}</Card.Link>
                     
                     
                    <Card.Text className="d-flex justify-content-center gap-4 fs-4">
                        <i className="bi bi-cart-plus " onClick={() => handleAddToCart()}>  </i>
                        <i className="bi bi-cart-dash" onClick={() => handleRemoveFromCart()}></i>
                    </Card.Text>

                         <Card className=" d-flex flex-row justify-content-center">{starHtml(props?.rating)}</Card>
          

                </Card.Body>
            </Card>

        </>
    );
};