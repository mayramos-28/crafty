import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccountSeller } from "../../store/slices/SellerAccountSlice";
import { Button, Form } from "react-bootstrap";
import { Input } from "../forms/Input";
import { AccountSellerFormComponent } from "./AccountSellerFormComponent";

export const CreateAccountSellerComponent = ({ sellerId }) => {

    const dispatch = useDispatch();


    const account = {
        'bankName': '',
        'bankAccountNumber': '',
        'bankaccountOwner': '',
    }


    return (
        <>
            <div>
                
                <AccountSellerFormComponent
                    key={account.id}
                    account={account}
                    onSubmit={(values) => {
                        dispatch(createAccountSeller(values));
                    }}
                ></AccountSellerFormComponent>
            </div>


        </>
    )
};