
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress, selectAddressError, selectAddressLoading, selectAllAddress, updateAddress } from "../../store/slices/AddressSlice";
import { useEffect, useRef } from "react";
import { AddressFormComponent } from "./AddresFormComponente";


export const AddressUpdateComponent = ({ userId }) => {
  const firstExecution = useRef(true);
  const addresses = useSelector(selectAllAddress);
  const error = useSelector(selectAddressError);
  const loading = useSelector(selectAddressLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstExecution.current) {
      dispatch(fetchAddress({ userId }));
      firstExecution.current = false;
    }
  }, [dispatch, firstExecution, userId]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

 

  return (
    <div className="dates-update">
      {
        addresses.map((address) => (
          <AddressFormComponent key={address.id}
            address={address}
            onSubmit={(values) => {
              dispatch(updateAddress(values));
            }}
          />
        ))
      }
    </div>
  );
};

 