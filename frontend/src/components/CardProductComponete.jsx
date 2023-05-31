import { Button } from "react-bootstrap";
import { craftyFileUrl } from "../api/FileApi";
import FirsetImage from "./../assets/image/carousel/modelado-alta-vista-arcilla-torno-alfarero.jpg";
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/slices/CartSlice";
import { useEffect } from "react";
import { starHtml } from "../store/slices/ProductSlice";



export const CardProductComponent = ({ props, linkTo, className }) => {

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
        <Card className={className}>
            <Card.Body>
                <div className="w-100 overflow-hidden" style={{height: "150px"}}>
                    <Card.Img className="object-fit-cover" variant="top" src={craftyFileUrl(props.imageId)} onError={(e) => { e.target.src = FirsetImage }} />
                </div>
                <Card.Link href={linkTo} className="my-3 text-reset text-decoration-none" ><h4 className="text-dark">Ver {props.name}</h4></Card.Link>

                <Card.Text className="d-flex justify-content-center gap-4 fs-4">
                    <i className="bi bi-cart-plus " onClick={() => handleAddToCart()}>  </i>
                    <i className="bi bi-cart-dash" onClick={() => handleRemoveFromCart()}></i>
                </Card.Text>

                <Card className=" d-flex flex-row justify-content-center">{starHtml(props?.rating)}</Card>


            </Card.Body>
        </Card>
    );
};