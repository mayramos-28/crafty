import Card from 'react-bootstrap/Card';
import { CardComponent } from '../Card';
import { Spinner } from 'react-bootstrap';
import { fetchProducts, selectAllProducts, selectProductLoading } from '../../store/slices/ProductSlice';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const SellerInformationPage = ({ sellerInformation }) => {
  const { businessDescription, businessPhone, businessWebsite, businessType, user, id } = sellerInformation;
  const dispatch = useDispatch();
  const Products = useSelector(selectAllProducts);
  const ProductLoading = useSelector(selectProductLoading);
  const firstExecution = useRef(true);
  const sellerId = id;
  
  useEffect(() => {
    if (firstExecution) {
        dispatch(fetchProducts({sellerId} ))
        firstExecution.current = false;
    }
}, [dispatch, firstExecution]);


  //conseguir nombre del vendedor y su direccion
  return (
    <Card>
      <Card.Header >Sobre el vendedor: </Card.Header>
      <Card.Body>
        <Card.Title>Empresa {user?.name}</Card.Title>
        <Card.Text>
          {businessType}
        </Card.Text>
        <Card.Text>
          {businessDescription}
        </Card.Text>
        <Card.Text>
          <p>Conctacto</p>
          <p>{user?.email}</p>
          <p>{businessPhone}</p>
          <p>{businessWebsite}</p>
        </Card.Text>

        { Products
         && (
          <div id="example-collapse-text-2">
          <h2>Otros productos de este vendedor</h2>
          <div className="d-flex justify-content-center py-4 gap-2">
            {
              ProductLoading ? (
                <Spinner animation="border" variant="danger" />
              ) : (
                Products.map((product) => (
                  <CardComponent key={product.id} props={product} linkTo={`/products/${product.id}`} edit={false} />
                ))
              )
            }


          </div>
        </div>
         ) }






      </Card.Body>
    </Card>
  );
}

