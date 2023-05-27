// import { useDispatch, useSelector } from "react-redux";
// import { fetchAddress, selectAddressError, selectAddressLoading, selectAllAddress } from "../../store/slices/AddressSlice";
// import { useEffect, useRef } from "react";
// import { Button, Form } from "react-bootstrap";
// import { Input } from "../forms/Input";


// export const AddressUpdateComponent = ({ userId }) => {
//     const firstExecution = useRef(true);
//     const addresses = useSelector(selectAllAddress);
//     const error = useSelector(selectAddressError);
//     const loading = useSelector(selectAddressLoading);
//     const dispatch = useDispatch();

//     useEffect(() => {
//       if (firstExecution.current) {
//         dispatch(fetchAddress({ userId }));
//         firstExecution.current = false;
//       }
//     }, [dispatch, firstExecution, userId]);


//     const handleSubmit = async (e, addressId) => {
//       e.preventDefault();
//       const addressToUpdate = addresses.find((address) => address.id === addressId);
//       dispatch(updateAddress({ ...addressToUpdate, userId }));
//     };

//     const handleChange = (e, addressId) => {
//       const updatedAddress = addresses.map((address) =>
//         address.id === addressId ? { ...address, [e.target.name]: e.target.value } : address
//       );
//       dispatch(updateOneAddress(addressId, updatedAddress));
//     };

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (error) {
//       return <div>Error: {error}</div>;
//     }

//     if (addresses.length === 0) {
//       return <div>No addresses found.</div>;
//     }

//     return (
//       <>
//       <div className="dates-update">
//         {addresses.map((address) => (
//           <Form className="form-control" onSubmit={(e) => handleSubmit(e, address.id)} key={address.id}>
//             <Form.Label>Dirección en {address.city}</Form.Label>
//             <Input
//               label="Calle"
//               type="text"
//               name="street"
//               value={address.street}
//               onChange={(e) => handleChange(e, address.id)}
//               placeholder=""
//             />
//             <Input
//               label="Número"
//               type="number"
//               name="number"
//               value={address.number}
//               onChange={(e) => handleChange(e, address.id)}
//             />
//             <Input
//               label="Código Postal"
//               type="text"
//               name="zipCode"
//               value={address.zipCode}
//               onChange={(e) => handleChange(e, address.id)}
//             />
//             <Input
//               label="Ciudad"
//               type="text"
//               name="city"
//               value={address.city}
//               onChange={(e) => handleChange(e, address.id)}
//             />
//             <Input
//               label="Comunidad Autónoma"
//               type="text"
//               name="state"
//               value={address.state}
//               onChange={(e) => handleChange(e, address.id)}
//             />
//             <Input
//               label="País"
//               type="text"
//               name="country"
//               value={address.country}
//               onChange={(e) => handleChange(e, address.id)}
//             />
//             <Button variant="primary" type="submit" className="btn-icon">
//               <i className="bi bi-save"></i>
//             </Button>
//           </Form>
//         ))}
//       </div>

//       </>
//     );
//   };
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress, selectAddressError, selectAddressLoading, selectAllAddress, updateAddress } from "../../store/slices/AddressSlice";
import { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Input } from "../forms/Input";
import { updateAddress as updateAddressApi } from "../../api/AddressApi";

export const AddressUpdateComponent = ({ userId }) => {
  const firstExecution = useRef(true);
  const addresses = useSelector(selectAllAddress);
  const error = useSelector(selectAddressError);
  const loading = useSelector(selectAddressLoading);
  const dispatch = useDispatch();

  const draftAddress = addresses.map((address) => ({ ...address }));

  useEffect(() => {
    if (firstExecution.current) {
      dispatch(fetchAddress({ userId }));
      firstExecution.current = false;
    }
  }, [dispatch, firstExecution, userId]);

  const handleSubmit = async (e, address) => {
    e.preventDefault();
    dispatch(updateAddress(address));
  };

  const handleChange = (e, address) => {
    e.preventDefault();
    address[e.target.name] = e.target.value;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (addresses.length === 0) {
    return <div>No addresses found.</div>;
  }

  return (
    <div className="dates-update">
      {
        draftAddress.map((address) =>  (
            <Form className="form-control" onSubmit={(e) => handleSubmit(e, address)} key={address.id}>
              <Form.Label>Dirección en {address.city}</Form.Label>
              <Input
                label="Calle"
                type="text"
                name="street"
                value={address.street}
                onChange={(e) => handleChange(e, address)}
                placeholder=""
              />
              <Input
                label="Número"
                type="number"
                name="number"
                value={address.number}
                onChange={(e) => handleChange(e, address)}
              />
              <Input
                label="Código Postal"
                type="text"
                name="zipCode"
                value={address.zipCode}
                onChange={(e) => handleChange(e, address)}
              />
              <Input
                label="Ciudad"
                type="text"
                name="city"
                value={address.city}
                onChange={(e) => handleChange(e, address)}
              />
              <Input
                label="Comunidad Autónoma"
                type="text"
                name="state"
                value={address.state}
                onChange={(e) => handleChange(e, address)}
              />
              <Input
                label="País"
                type="text"
                name="country"
                value={address.country}
                onChange={(e) => handleChange(e, address)}
              />
              <Button variant="primary" type="submit" className="btn-icon">
                <i className="bi bi-save"></i>
              </Button>
            </Form>
          ))
      }
    </div>
  );
};
