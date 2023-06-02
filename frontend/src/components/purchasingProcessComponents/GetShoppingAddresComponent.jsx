import { useEffect, useRef } from "react";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress, selectAddressLoading, selectAllAddress } from "../../store/slices/AddressSlice";

export const GetShoppingAddressComponent = ({ onChangeAddress, userId, canChange }) => {
  const firstExecution = useRef(true);
  const addresses = useSelector(selectAllAddress);
  const loading = useSelector(selectAddressLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (firstExecution) {
      dispatch(fetchAddress({ userId }));
      firstExecution.current = false;
    }
  }, [firstExecution]);

  if (!canChange) {
    return (
      <i class="bi bi-check-circle icon-check" style={{ fontSize: '1rem ' }} > <span> Direccion confirmada</span>
      </i>
    )

  }

  if (loading) {
    return <div><Spinner style={{ fontWeight: '1rem' }} ></Spinner></div>;
  }
  return (
    <>
      <Row>

        <Col>
          <Form >
            <Form.Label className="d-block">Elige una dirección para el envío:</Form.Label>
            {addresses.map((address) => {
              let addressData =
                "calle: " +
                address.street +
                ",  " +
                address.number +
                " , " +
                address.city +
                " , " +
                address.state +
                " , " +
                address.country +
                " , " +
                address.zipCode;
              return (
                <Form.Check
                  key={address.id}
                  inline
                  label={addressData}
                  name={address.id}
                  type="radio"
                  onChange={() => onChangeAddress(address.id)}
                  id={address.id}
                />
              );
            })}
          </Form>
        </Col>
      </Row>
    </>
  );



}