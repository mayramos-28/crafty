
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { addSeller, selectSellerLoading, selectSellerError, selectSellerSuccess } from '../../store/slices/SellerSlice';
import { Input } from '../forms/Input';
import { Navigate } from 'react-router-dom';
import { SellerFormComponent } from './SellerFormComponent';


export const SellerCreateComponent = ({ userId }) => {
    
    const loading = useSelector(selectSellerLoading);
    const error = useSelector(selectSellerError);
    const success = useSelector(selectSellerSuccess);
    const dispatch = useDispatch();
    const seller = {
        businessId: '',
        businessType: '',
        businessPhone: '',
        businessWebsite: '',
        businessLogo: '',
        businessDescription: '',
        userId: userId
    }

    if (loading) {
        return (
            <div className='d-flex justify-content-center align-content-center'>

                <Spinner animation="border" variant="info" as="div" role="status" style={{ fontWeight: '80rem' }} />
            </div>)
    }
    if (success) {
        return <Navigate to='/profile/my-area' />
    }



    return (
        <>
        <div>
            <SellerFormComponent
            key={seller.id}
            seller={seller}
            valueBtn='Dar de alta'
            labelForm='Alta de vendedor'
            onSubmit={(values) => {
                dispatch(addSeller({ ...values }));
            }}
            
            />
        </div>

           
        </>
    );
};


