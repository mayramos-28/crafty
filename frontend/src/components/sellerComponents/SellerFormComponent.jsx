// SellerForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { addSeller, selectSellerLoading, selectSellerError, selectSellerSuccess } from '../../store/slices/SellerSlice';
import { Input } from '../forms/Input';
import { Navigate } from 'react-router-dom';


export const SellerForm = ({ userId }) => {
    const [formData, setFormData] = useState({
        businessId: '',      
        businessType: '',
        businessPhone: '',        
        businessWebsite: '',
        businessLogo: '',
        businessDescription: '',

    });

    const loading = useSelector(selectSellerLoading);
    const error = useSelector(selectSellerError);
    const success = useSelector(selectSellerSuccess);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSeller({ ...formData, userId }));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    if (loading) {
        return (
            <div className='d-flex justify-content-center align-content-center'>

                <Spinner animation="border" variant="info" as="div" role="status" style={{ fontWeight: '80rem' }} />
            </div>)
    }
    if(success){
        return <Navigate to='/profile/my-area' />
    }
    


    return (
        <>

            <Row className='d-flex justify-content-center flex-column align-content-center py-2'>
                <Col sm={12} md={6} className=''>

                    <Form className="form-control " onSubmit={handleSubmit} >
                        <Form.Label>Alta como vendedor</Form.Label>
                        <Input
                            key="formData.businessId"
                            label="CIF"
                            type="text"
                            name="businessId"
                            value={formData.businessId}
                            onChange={handleChange}
                        />
                       
                        <Input
                            key="formData.businessType"
                            label="Sector"
                            type="text"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                        />
                        <Input
                            key="formData.businessPhone"
                            label="Número de teléfono"
                            type="text"
                            name="businessPhone"
                            value={formData.businessPhone}
                            onChange={handleChange}
                        />
                        <Input
                            key="formData.businessWebsite"
                            label="Web de la empresa"
                            type="text"
                            name="businessWebsite"
                            value={formData.businessWebsite}
                            onChange={handleChange}
                        />
                        <Input
                            key="formData.businessLogo"
                            label="Logo"
                            type="text"
                            name="businessLogo"
                            value={formData.bussinessLogo}
                            onChange={handleChange}
                        />
                        <Input
                            key="formData.businessDescription"
                            label="Descripción de la empresa"
                            type="text"
                            name="businessDescription"
                            value={formData.businessDescription}
                            onChange={handleChange}
                        />


                        <Button type="submit" className="btn-login">
                            Dar de alta
                        </Button>
                    </Form>

                    {error && <div className='error'>
                        <p>{error} </p>
                    </div>}



                </Col>



            </Row>
        </>
    );
};


