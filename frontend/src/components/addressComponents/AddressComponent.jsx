import { useDispatch, useSelector } from "react-redux";
import { fetchAddress, getAddress, selectAddressError, selectAddressLoading, selectAllAddress } from "../../store/slices/AddressSlice";
import { useEffect, useRef, useState } from "react";
import { AddressCreateComponent } from "./createAddressComponet";
import { Button, Collapse } from "react-bootstrap";

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
          <p>No tienes direcciones guardadas</p>
          {userId && (<AddressCreateComponent userId={userId}></AddressCreateComponent>)}
        </div>
      </>
    )
  }

  return (
    <div>
      <h1>Mis Direcciones</h1>
      <div>
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
      </div>
      
      <div className="d-flex flex-column w-100 ">

        <Button className={open ? "d-none" : "d-block"}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          size="lg"
        >
          Crear Direccion
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">

          {userId && (<AddressCreateComponent userId={userId}></AddressCreateComponent>)}


          </div>
        </Collapse>

        <Button
          className={open ? "d-block" : "d-none"}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}

          size="lg"
        >
          Ocultar formulario
        </Button>
      </div>
     
    </div>
  )
}

  ;