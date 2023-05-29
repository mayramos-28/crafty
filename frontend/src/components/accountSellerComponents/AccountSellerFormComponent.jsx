
import { Button, Form } from "react-bootstrap";
import { Input } from "../forms/Input";
import { Formik } from 'formik';

export const AccountSellerFormComponent = ({ account, onSubmit }) => {
   
    return (
        <>
        <Formik key={account?.id}
            initialValues={{ ...account }}
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
                
                <Input                 
                    key="formData.bankName"
                    label="Banco"
                    type="text"
                    name="bankName"
                    value={values.bankName}                   
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Santander, BBVA, etc"
                >
                </Input>

                <Input              
                    label="Número de cuenta"
                    type="text"
                    name="cardNumber"
                    value={values.bankAccountNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="ES6621000418401234567891"
                >
                </Input>
                <Input              
                    label="Titular de la cuenta"
                    type="text"
                    name="cardNumber"
                    value={values.bankaccountOwner}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Fulanito Mengano"
                >
                </Input>
               

                <Button variant="primary" type="submit" className="btn-icon">
                    <i className="bi bi-save " style={{ fontSize: '1.5rem' }}></i>
                </Button>

            </Form>
            )}
        </Formik>
            


        </>
    );
};