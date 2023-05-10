import { useDispatch, useSelector } from "react-redux";
import { fetchAddress, getAddress, selectAddressError, selectAddressLoading, selectAllAddress } from "../store/slices/AddressSlice";
import { useEffect, useRef, useState } from "react";

export const AddressComponent = ({ userId }) => {

  const firstExecution = useRef(true);
  const address = useSelector(selectAllAddress);
  const error = useSelector(selectAddressError);
  const loading = useSelector(selectAddressLoading);


  const dispatch = useDispatch();

  useEffect(() => {
    if (firstExecution.current) {

      dispatch(fetchAddress({ userId }));
      firstExecution.current = false;
    }
  }, [dispatch, firstExecution]);
  console.log('Address', address, 'userId', userId);

  console.log('Direcciones', address, 'userId', userId);
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
    </div>
  )
};