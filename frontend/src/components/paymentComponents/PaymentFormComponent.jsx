
import { Button, Form } from "react-bootstrap";
import { Input } from "../forms/Input";
import { Formik } from 'formik';

export const PaymentFormComponent = ({ paymentType, onSubmit, btnValue }) => {
  
    return (
        <>
        <Formik key={paymentType?.id}
            initialValues={{ ...paymentType }}
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

                <Form className="form-control" onSubmit={handleSubmit} >
                <Form.Label>Método de pago</Form.Label>
                <Input                 
                    label="Tipo de tarjeta"
                    type="text"
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Crédito, Débito, etc"
                >
                </Input>

                <Input              
                    label="Número de tarjeta"
                    type="text"
                    name="cardNumber"
                    value={values.cardNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="4940190000370787"
                >
                </Input>
                <Input                    
                    label="Caducidad"
                    type="date"
                    name="expirationDate"
                    value={values.expirationDate}
                    onBlur={handleBlur}
                    onChange={handleChange}>

                </Input>
                <Input                  
                    label="CVV"
                    type="text"
                    name="cvv"
                    value={values.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    onBlur={handleBlur} >
                </Input>


                <Button variant="primary" type="submit" className="btn-icon">
                    <i className="bi bi-save "> {btnValue}</i>
                </Button>

            </Form>
            )}
        </Formik>
            


        </>
    );
};