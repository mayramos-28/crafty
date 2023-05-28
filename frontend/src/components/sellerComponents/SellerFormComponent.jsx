
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { addSeller, selectSellerLoading, selectSellerError, selectSellerSuccess } from '../../store/slices/SellerSlice';
import { Input } from '../forms/Input';
import { Navigate } from 'react-router-dom';
import { Formik } from 'formik';


export const SellerFormComponent = ({ seller, onSubmit, valueBtn, labelForm }) => {

    return (
        <>
            <Formik
                key={seller.id}
                initialValues={{ ...seller }}
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

                    <Row className='d-flex justify-content-center flex-column align-content-center py-2'>
                        <Col sm={12} md={6} className=''>

                            <Form className="form-control " onSubmit={handleSubmit} >
                                <h3>{labelForm}</h3>
                                <Input

                                    label="CIF"
                                    type="text"
                                    name="businessId"
                                    value={values.businessId}
                                    
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Input

                                    label="Sector"
                                    type="text"
                                    name="businessType"
                                    value={values.businessType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input

                                    label="Número de teléfono"
                                    type="text"
                                    name="businessPhone"
                                    value={values.businessPhone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input

                                    label="Web de la empresa"
                                    type="text"
                                    name="businessWebsite"
                                    value={values.businessWebsite}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input

                                    label="Logo"
                                    type="text"
                                    name="businessLogo"
                                    value={values.bussinessLogo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input

                                    label="Descripción de la empresa"
                                    type="text"
                                    name="businessDescription"
                                    value={values.businessDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />


                                <Button type="submit" className="btn-login">
                                    {valueBtn}
                                </Button>
                            </Form>



                        </Col>



                    </Row>
                )}
            </Formik>


        </>
    );
};


