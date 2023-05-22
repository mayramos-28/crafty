import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Input } from "../forms/Input";
import { useState } from "react";
import { createPaymentType } from "../../store/slices/PaymentType";

export const CreatePaymantComponent = ({ userId }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        'type': '',
        'cardNumber': '',
        'ExpirationDate': '',
        'cvv': '',

    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPaymentType({ ...formData, userId }));
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
         <div className="container-fluid d-flex justify-content-center h-100 flex-grow-1">
                <div className="form-center-container">
                    <Form name="form" onSubmit={handleSubmit} className="form-display">
                        <Form.Label>Nuevo método de pago</Form.Label>
                        <Input
                            key="formData.type"
                            label="Tipo de tarjeta"
                            type="text"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                        </Input>

                        <Input
                            key="formData.cardNumber"
                            label="Número de tarjeta"
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                        >
                        </Input>
                        <Input
                            key="formData.ExpirationDate"
                            label="Caducidad"
                            type="date"
                            name="ExpirationDate"
                            value={formData.ExpirationDate}
                            onChange={handleChange}>

                        </Input>
                        <Input
                            key="formData.cvv"
                            label="Ciudad"
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}>
                        </Input>
                        

                        <Button variant="primary" type="submit" className="form-btn">
                            Guardar Tarjeta
                        </Button>

                    </Form>
                </div>
            </div>
        </>
    );
};