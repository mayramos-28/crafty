
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { fetchOrder, selectAllOrder, selectOrderLoading, selectOrderSucess, updateOrder } from "../store/slices/OrderSlice";

import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Spinner, Table } from "react-bootstrap";
import { ModalComponent } from "../components/ModalComponent";


export const SellerOrdersPage = () => {
  const firstExecution = useRef(true);
  const orders = useSelector(selectAllOrder);
  const loading = useSelector(selectOrderLoading);
  const success = useSelector(selectOrderSucess);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const { authUser, isLoading, error } = useSelector((state) => state.authUser);
  const sellerId = authUser?.seller?.id;

  useEffect(() => {
    sellerId && dispatch(fetchAuthUser())
      .then(() => { dispatch(fetchOrder({ sellerId })); });
  }, [dispatch, sellerId]);

  const handleUpdateState = async (order, state) => {
    await dispatch(updateOrder({ order, state }));
    setModalShow(true);

  }

  if (loading) {
    return <div className="w-100 d-flex justify-content-center"><Spinner style={{ fontWeight: '1rem' }} ></Spinner></div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <ModalComponent canShow={modalShow} title={'Orden actualizada'} message={"orden actualizada correctamente!"} />

      <h3>Mis ventas</h3>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">


            <table className="table">
              <thead className="text-center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Referencia</th>
                  <th scope="col">Total pedido</th>
                  <th scope="col">Productos</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {orders.map((order, index) => {
                  order.state !== 'generated' &&
                    (<React.Fragment key={order.id}>
                      <tr>
                        <td scope="row">{index + 1}</td>
                        <td scope="col">{order.id}</td>
                        <td scope="col">{order.total}</td>
                        <td scope="col">
                          <ul>
                            {order.order_details.map((detail, index) => (
                              <li key={index}>{detail.name}</li>
                            ))}
                          </ul>
                        </td>
                        <td scope="col">
                          <ul>
                            {order.order_details.map((detail, index) => (
                              <li key={index}>{detail.quantity}</li>
                            ))}
                          </ul>
                        </td>
                        <td scope="col">
                          <ul>
                            {order.order_details.map((detail, index) => (
                              <li key={index}>{detail.price} €</li>
                            ))}
                          </ul>
                        </td>
                        <td scope="col">
                          {order.state === 'completed' && <span>Recibido</span>}
                          {order.state === 'cancelled' && <span>Cancelado</span>}
                          {order.state === 'pending' && (<span > Recibido</span>)}


                        </td>
                      </tr>
                    </React.Fragment>
                    )
                })}
              </tbody>
            </table>

          </div>
        </div>

      </div>
    </>
  );
};