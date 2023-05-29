
import { Button, Col, Form } from "react-bootstrap";
import { Input } from "./Input";
import { Formik } from 'formik';

export const RegisterFormComponent = ({ user, onSubmit, btnValue, labelValue }) => {



    return (
        <>
            <Formik
                initialValues={{ ...user }}
                onSubmit={onSubmit}
                validate={values => {
                    let errors = {};
                    if (!values.name) {
                        errors.name = 'Nombre requerido';
                    }
                    else if (values.name.length < 5) {
                        errors.name = 'El nombre debe tener al menos 5 caracteres';
                    }
                    if (!values.email) {
                        errors.email = 'El correo electrónico es requerido';
                    }
                    else if (!/\S+@\S+\.\S+/.test(values.email)) {
                        errors.email = 'Correo electrónico inválido';
                    }
                    if (!values.confirmEmail) {
                        errors.confirmEmail = 'Debes confirmar el Correo electrónico introducido';
                    }
                    if (!values.password) {
                        errors.password = 'Contraseña requerida';
                    }
                    else if (values.password.length < 6) {
                        errors.password = 'La contraseña debe tener al menos 6 caracteres';
                    }
                    if (!values.confirmPassword) {
                        errors.confirmPassword = 'Debes Confirmar la contraseña introducida';
                    }
                    if (values.email !== values.confirmEmail) {
                        errors.confirmEmail = 'Los Correos electrónicos no coinciden';
                    }
                    if (values.password !== values.confirmPassword) {
                        errors.confirmPassword = 'Las contraseñas no coinciden';
                    }
                    return errors;

                }}

            >
                {({
                    values,// onSubmit={(values) => {
                    //     dispatch(updateUser(values));
                    // }}
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

                                label="Nombre completo"
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}                               
                                placeholder="Jonh Doe"
                            />
                            {touched.name && errors.name && <div className="error">{errors.name}</div>}
                        </div>

                        <div>
                             <Input
                            key="registerEmail"
                            label="Email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="micorre@ejemplo.com"
                        />
                        {touched.email && errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        <div>
                              <Input
                            key="registerEmailConfirm"
                            label="Confirmar email"
                            type="email"
                            name="confirmEmail"
                            value={values.confirmEmail}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.confirmEmail && errors.confirmEmail &&  <div className="error">{errors.confirmEmail}</div>}
                        </div>

                        <div>
                            <Input
                            key="registerPassword"
                            label="Contraseña"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.password && errors.password &&  <div className="error">{errors.password}</div>}
                        </div>

                        <div>
                            <Input
                                key="registerPasswordConfirm"
                                label="Confirmar contraseña"
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.confirmPassword && errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                        </div>



                        <Col className="d-flex justify-content-center"><Button variant="primary" type="submit" className="btn-icon gap-2">
                            <i className="bi bi-save  " style={{ fontSize: '1.5rem' }}></i> <span>{btnValue}</span>
                        </Button></Col>


                    </Form>
                )}
            </Formik>




        </>
    );
};