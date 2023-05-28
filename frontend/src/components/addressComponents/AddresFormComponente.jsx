
import { Button, Form } from "react-bootstrap";
import { Input } from "../forms/Input";
import { Formik } from 'formik';


export const AddressFormComponent = ({ address, onSubmit }) => {

    return (
        <Formik key={address.id}
            initialValues={{ ...address }}

            onSubmit={onSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (

                <Form className="form-control" onSubmit={handleSubmit}>
                    <Form.Label>Dirección en {values.city}</Form.Label>
                    <Input
                        label="Calle"
                        type="text"
                        name="street"
                        value={values.street}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        label="Número"
                        type="number"
                        name="number"
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        label="Código Postal"
                        type="text"
                        name="zipCode"
                        value={values.zipCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        label="Ciudad"
                        type="text"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        label="Comunidad Autónoma"
                        type="text"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Input
                        label="País"
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Button variant="primary" type="submit" className="btn-icon">
                        <i className="bi bi-save"></i>
                    </Button>
                </Form>
            )}
        </Formik>

    )
};