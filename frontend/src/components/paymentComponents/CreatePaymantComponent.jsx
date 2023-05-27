import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Input } from "../forms/Input";
import { useState } from "react";
import { createPaymentType } from "../../store/slices/PaymentType";

export const CreatePaymantComponent = ({ userId }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        type: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',

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
            <Form className="form-control" onSubmit={handleSubmit} >
                <Form.Label>Nuevo método de pago</Form.Label>
                <Input
                    key="formData.type"
                    label="Tipo de tarjeta"
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="Crédito, Débito, etc"

                >
                </Input>

                <Input
                    key="formData.cardNumber"
                    label="Número de tarjeta"
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="4940190000370787"
                >
                </Input>
                <Input
                    key="formData.expirationDate"
                    label="Caducidad"
                    type="date"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}>

                </Input>
                <Input
                    key="formData.cvv"
                    label="CVV"
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}>
                </Input>


                <Button variant="primary" type="submit" className="btn-icon">
                    <i class="bi bi-save "></i>
                </Button>

            </Form>


        </>
    );
};