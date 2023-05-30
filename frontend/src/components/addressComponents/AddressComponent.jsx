import { useDispatch, useSelector } from "react-redux";
import { fetchAddress, getAddress, selectAddressError, selectAddressLoading, selectAddressSuccess, selectAllAddress } from "../../store/slices/AddressSlice";
import { useEffect, useRef, useState } from "react";
import { AddressCreateComponent } from "./createAddressComponet";
import { Button, Card, Col, Collapse, Row } from "react-bootstrap";
import { AddressUpdateComponent } from "./AddressUpdateComponent";

export const AddressComponent = ({ userId }) => {

  const firstExecution = useRef(true);

  return (   
     <>      
        <AddressUpdateComponent userId={userId}></AddressUpdateComponent>
      </>
  )
}

  ;