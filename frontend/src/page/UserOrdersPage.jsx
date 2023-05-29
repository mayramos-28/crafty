
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchOrder, selectAllOrder, selectOrderLoading, updateState } from "../store/slices/OrderSlice";

import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Spinner } from "react-bootstrap";


export const UserOrdersPage = () => {
    const firstExecution = useRef(true);
    const orders = useSelector(selectAllOrder);
    const loading = useSelector(selectOrderLoading);
    const dispatch = useDispatch();

    const { authUser, isLoading, error } = useSelector((state) => state.authUser);
    const userId = authUser?.user?.id;

    useEffect(() => {
        userId && dispatch(fetchAuthUser())
            .then(() => { dispatch(fetchOrder({ userId })); });
    }, [dispatch, userId]);

    const handleUpdateState = (order) => {
        dispatch(updateState({ order, state: 'cancelled' }));
    }

    if (loading) {
        return <div className="w-100 d-flex justify-content-center"><Spinner style={{ fontWeight: '1rem' }} ></Spinner></div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <h3>Mis pedidos</h3>

            {orders.map((order, i) => (

               
                        <>
                            <div key={order.id}>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        {i + 1}  Total: {order.total} € - Fecha: {order.created_at}
                                        <ul>

                                            {order.order_details.map((detail) => (
                                                <li key={detail.id}>
                                                    producto: {detail?.name} - cantidad: {detail.quantity} - {detail.price} €
                                                </li>
                                            ))}
                                            <li>
                                                {order.state !== 'cancelled' && <button className="w-25" onClick={() => handleUpdateState(order)}>Cancelar</button>}
                                            </li>

                                        </ul>
                                    </li>
                                </ul>


                            </div>
                        </>
                   
                

            ))}


        </>
    )
};