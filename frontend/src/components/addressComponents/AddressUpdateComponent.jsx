
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress, selectAllAddress, updateAddress } from "../../store/slices/AddressSlice";
import { useEffect, useRef, useState } from "react";
import { AddressFormComponent } from "./AddresFormComponente";
import { ModalComponent } from "../ModalComponent";
import { useNavigate } from "react-router-dom";


export const AddressUpdateComponent = ({ userId }) => {
  const firstExecution = useRef(true);
  const addresses = useSelector(selectAllAddress);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstExecution.current) {
      dispatch(fetchAddress({ userId }));
      firstExecution.current = false;
    }
  }, [dispatch, firstExecution, userId]);


    const handleUpdateState = async (values) => {
      await dispatch(updateAddress(values));
      setModalShow(true);
    }



  return (
    <div className="d-flex flex-wrap justify-content-around gap-3">
       <ModalComponent canShow={modalShow} title={'Orden actualizada'} message={"orden actualizada correctamente!"} />
      {
        addresses.map((address) => (
          <div>
            <AddressFormComponent key={address.id}
              address={address}
              onSubmit={(values) => {
                dispatch(updateAddress(values)).then(
                  () => navigate("/profile/addresses")
              );
              }}
              label="Dirección en "
              btn="Editar"
            />
          </div>



        ))
      }
    </div>
  );
};

