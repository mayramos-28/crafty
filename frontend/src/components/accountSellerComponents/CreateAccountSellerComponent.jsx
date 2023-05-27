import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccountSeller } from "../../store/slices/SellerAccountSlice";
import { Button, Form } from "react-bootstrap";
import { Input } from "../forms/Input";

export const CreateAccountSellerComponent = ({ sellerId }) => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        'bankName': '',
        'bankAccountNumber': '',
        'bankaccountOwner': '',

    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createAccountSeller({ ...formData, sellerId }));
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };


    return (
        <>

            <Form className="form-control" onSubmit={handleSubmit} >
                <Input
                    key="formData.bankName"
                    label="Banco"
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                >
                </Input>

                <Input
                    key="formData.bankAccountNumber"
                    label="Número de cuenta"
                    type="text"
                    name="bankAccountNumber"
                    value={formData.bankAccountNumber}
                    onChange={handleChange}
                >
                </Input>
                <Input
                    key="formData.bankaccountOwner"
                    label="Caducidad"
                    type="text"
                    name="bankaccountOwner"
                    value={formData.bankaccountOwner}
                    onChange={handleChange}>

                </Input>



                <Button variant="primary" type="submit" className="btn-icon">
                    <i class="bi bi-save "></i>
                </Button>

            </Form>

        </>
    )
};