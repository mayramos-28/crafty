
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { fetchOrder, selectAllOrder, selectOrderLoading, selectOrderSucess, updateOrder } from "../store/slices/OrderSlice";

import { fetchAuthUser } from "../store/slices/authUserSlice";
import { Spinner, Table } from "react-bootstrap";
import { ModalComponent } from "../components/ModalComponent";


export const UserOrdersPage = () => {
  const firstExecution = useRef(true);
  const orders = useSelector(selectAllOrder);
  const loading = useSelector(selectOrderLoading);
  const success = useSelector(selectOrderSucess);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const { authUser, isLoading, error } = useSelector((state) => state.authUser);
  const userId = authUser?.user?.id;

  useEffect(() => {
    userId && dispatch(fetchAuthUser())
      .then(() => { dispatch(fetchOrder({ userId })); });
  }, [dispatch, userId]);

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
      {/* <ModalComponent canShow={modalShow} title={'Orden actualizada'} message={"orden actualizada correctamente!"} /> */}

      <h3>Mis pedidos</h3>


      <div className="table-responsive">
        <table className="table">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Referencia</th>
              <th>Total pedido</th>
              <th>Productos</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {orders.map((order, index) => {
              if (order.state !== 'generated') {
                return (
                  <React.Fragment key={order.id}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{order.id}</td>
                      <td>{order.total}</td>
                      <td>
                        <ul>
                          {order.order_details.map((detail, index) => (
                            <li key={index}>{detail.name}</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <ul>
                          {order.order_details.map((detail, index) => (
                            <li key={index}>{detail.quantity}</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <ul>
                          {order.order_details.map((detail, index) => (
                            <li key={index}>{detail.price} €</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        {order.state === 'completed' && <span>Recibido</span>}
                        {order.state === 'cancelled' && <span>Cancelado</span>}
                        {order.state === 'completed' && (<span > Recibido</span>)}
                        {order.state === 'cancelled' && (<span > Cancelado</span>)}
                        {order.state === 'pending' && (
                          <div className="d-flex gap-1">
                            <button className="btn btn-danger mr-2" onClick={() => handleUpdateState(order, 'cancelled')}>
                              Cancelar
                            </button>
                            <button className="btn btn-success" onClick={() => handleUpdateState(order, 'completed')}>
                              Recibido
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  </React.Fragment>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>

      </div>
    </>
  );
};