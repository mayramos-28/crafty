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
            <div className="container-fluid d-flex justify-content-center h-100 flex-grow-1">
                <div className="form-center-container">
                    <Form name="form" onSubmit={handleSubmit} className="form-display">
                        <Form.Label>Actualizar cuenta de pago</Form.Label>
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



                        <Button variant="primary" type="submit" className="form-btn">
                            Guardar Cuenta
                        </Button>

                    </Form>
                </div>
            </div>
        </>
    )
};