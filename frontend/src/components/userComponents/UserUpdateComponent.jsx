import { Button, Col, Form } from "react-bootstrap";
import { Input } from "../forms/Input";
import { Formik } from 'formik';
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../../store/slices/authUserSlice";
import { updateUser } from "../../store/slices/UserSlice";

export const UserUpdateComponent = ({ user }) => {
    const firstExecution = useRef(true);
    const dispatch = useDispatch();


    return (
        <>
            <Formik
                initialValues={{ ...user }}
                onSubmit={(values) => {
                    dispatch(updateUser(values));
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
                        <h4>Mis datos de usuario</h4>
                        <Input
                            key="formData.name"
                            label="Nombre completo"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Fulanito Mengano"
                        >
                        </Input>

                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="       "
                        >
                        </Input>
                        <Col className="d-flex justify-content-center"><Button variant="primary" type="submit" className="btn-icon gap-2">
                            <i className="bi bi-save " style={{ fontSize: '1.5rem' }}></i> <span>  Actualziar datos</span>
                        </Button></Col>


                    </Form>
                )}
            </Formik>



        </>
    );
};