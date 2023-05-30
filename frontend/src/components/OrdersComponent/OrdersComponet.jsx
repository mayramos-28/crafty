import { Spinner, Table } from "react-bootstrap";


export const OrdersComponent = ({ orders, loading, error}) => {

    if (loading) {
        return <div className="w-100 d-flex justify-content-center"><Spinner style={{ fontWeight: '1rem' }} ></Spinner></div>;
      }
    if(error){
        return <div>{error}</div>;
    }


    return (
        <>
            <h3>Mis pedidos</h3>      

               <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
      </div>     
         
                {/* {orders.map((order, i) => (
                    <div key={order.id}>
                        <ul className="list-group">
                            <li className="list-group-item">
                                {i+1}  Total: {order.total} € - Fecha: {order.created_at}
                                <ul>
                                   
                                    {order.order_details.map((detail) => (
                                        <li key={detail.id}>
                                            producto: { detail?.name} - cantidad: {detail.quantity} - {detail.price} €
                                        </li>
                                    ))}

                                </ul>
                            </li>
                        </ul>
                                                         
                        
                    </div>
                ))} */}
         
        


        </>
    );
};


