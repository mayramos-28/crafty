import { useDispatch } from "react-redux";
import { createAddress } from "../../store/slices/AddressSlice";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Input } from "../forms/Input";
import { reducer as addressReducer } from "../../store/slices/AddressSlice";


export const AddressCreateComponent = ({ userId }) => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        street: '',
        number: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
    });
    const handleSubmit = async (e) => {

        e.preventDefault();
        debugger;
        dispatch(createAddress({ ...formData, userId }));
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Form className="form-control" onSubmit={handleSubmit} >
                <Form.Label>Nueva Dirección</Form.Label>
                <Input
                    key="formData.street"
                    label="Calle"
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder=""
                >
                </Input>

                <Input
                    key="formData.number"
                    label="Número"
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                >
                </Input>
                <Input
                    key="formData.zipCode"
                    label="Código Postal"
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}>

                </Input>
                <Input
                    key="formData.city"
                    label="Ciudad"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}>
                </Input>
                <Input
                    key="formData.state"
                    label="Comunidad Autónoma"
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}>
                </Input>
                <Input
                    key="imageData.country"
                    label="Pais"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}>
                </Input>



                <Button variant="primary" type="submit" className=" btn-icon">
                    <i className="bi bi-save " style={{ fontSize: '1.5rem' }}></i>
                </Button>

            </Form>

        </>
    )
};