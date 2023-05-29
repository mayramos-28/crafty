
import { Button, Col, Form } from "react-bootstrap";
import { Input } from "./Input";
import { Formik } from 'formik';

export const LoginFormComponent = ({ user, onSubmit, btnValue, labelValue }) => {

    return (
        <>
            <Formik
                initialValues={{ ...user }}
                onSubmit={onSubmit}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'El correo electrónico es requerido';
                    }
                    else if (!/\S+@\S+\.\S+/.test(values.email)) {
                        errors.email = 'Correo electrónico inválido';
                    }
                    if (!values.password) {
                        errors.password = 'Contraseña requerida';
                    }
                    return errors;  <div className="error">{errors.email}</div>
                }}
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

                    <Form className="form-control " onSubmit={handleSubmit} >
                        <h4>{labelValue}</h4>
                        <div>
                            <Input
                                key="value.email"
                                label="Correo electrónico"
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="micorre@ejemplo.com"
                            >
                            </Input>
                            { touched.email && errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        <div>
                            <Input
                                label="Contraseña"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </Input>
                            {touched.password && errors.password && <div className="error">{errors.password}</div>}
                        </div>



                        <Col className="d-flex justify-content-center"><Button variant="primary" type="submit" className="btn-icon gap-2">
                            <i className="bi bi-save style={{ fontSize: '1.5rem' }}"></i> <span>{btnValue}</span>
                        </Button></Col>


                    </Form>
                )}
            </Formik>




        </>
    );
};