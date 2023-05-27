import { useDispatch, useSelector } from "react-redux";
import { fetchAddress, getAddress, selectAddressError, selectAddressLoading, selectAllAddress } from "../../store/slices/AddressSlice";
import { useEffect, useRef, useState } from "react";
import { AddressCreateComponent } from "./createAddressComponet";
import { Button, Card, Col, Collapse, Row } from "react-bootstrap";
import { AddressUpdateComponent } from "./AddressUpdateComponent";

export const AddressComponent = ({ userId }) => {

  const firstExecution = useRef(true);
  const address = useSelector(selectAllAddress);
  const error = useSelector(selectAddressError);
  const loading = useSelector(selectAddressLoading);
  const [open, setOpen] = useState(false);


  const dispatch = useDispatch();

  useEffect(() => {
    if (firstExecution.current) {

      dispatch(fetchAddress({ userId }));
      firstExecution.current = false;
    }
  }, [dispatch, firstExecution]);

  if (address.length === 0) {
    return (
      <>
        <div>
          <h3>No tienes direcciones guardadas</h3>
          {userId && (<AddressCreateComponent userId={userId}></AddressCreateComponent>)}
        </div>
      </>
    )
  }

  return (


    <>
      <h3>Mis Direcciones</h3>
      <Row className="gap-3">
{/* 
     
        <Col sm={12} md={12} xl={12} className="d-flex justify-content-center flex-wrap flex-row gap-2" >

          <Row>
            {Object.keys(address ?? {}).map((key) => {
              if (typeof address[key] === 'object' && address[key] !== null) {
                return (

                  <Col>

                    <Card border="primary" style={{ width: '18rem' }}>

                      <Card.Body>

                        <Card.Text>

                          {Object.keys(address[key]).map((innerKey) => (
                            <li key={innerKey}>
                              {innerKey}: {address[key][innerKey]}
                            </li>
                          ))}

                        </Card.Text>
                      </Card.Body>


                    </Card>


                  </Col>


                );
              } 
            })}


          </Row> */}

          <Col>
          <AddressUpdateComponent userId={userId}></AddressUpdateComponent>
          </Col>



       

        <Col sm={12} md={12} xl={12} className="d-flex flex-column justify-content-center" >


          <Button className={open ? "d-none btn-icon" : "d-block btn-icon"}
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}

          >
            Crear Direccion
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">

              {userId && (<AddressCreateComponent userId={userId}></AddressCreateComponent>)}


            </div>
          </Collapse>

          <Button
            className={open ? "d-block btn-icon" : "d-none btn-icon"}
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <i class="bi bi-x-circle"></i>
          </Button>
        </Col>


      </Row>



      {/* <div>
        <ul>
          {Object.keys(address ?? {}).map((key) => {
            if (typeof address[key] === 'object' && address[key] !== null) {
              return (
                <li key={key}>
                  {key}:
                  <ul>
                    {Object.keys(address[key]).map((innerKey) => (
                      <li key={innerKey}>
                        {innerKey}: {address[key][innerKey]}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={key}>
                  {key}: {address[key]}
                </li>
              );
            }
          })}
        </ul>
      </div> */}


    </>
  )
}

  ;