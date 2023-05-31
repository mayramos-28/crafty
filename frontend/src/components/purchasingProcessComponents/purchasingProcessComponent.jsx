import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Breadcrumb, Col, Form, Row } from 'react-bootstrap';
import { PurchasingFormComponent } from './PurchasingFormComponent';
import { GetShoppingCartComponent } from './GetShoppingCartComponent';
import React from 'react';

import { CreatePaymentIntent } from '../../api/StripeApi';


const stripePromise = loadStripe('pk_test_51NCcR3GLE1977v8xVaVKZePiYJCj1WdSYf6jb2bUAoY5h8VZQRe9VuqmTkIiEDRShZqmgWtVpm3rOxeTt2JhKysV00RrOzVLWS');



export class PurchasingProcessComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientSecret: "",
            order: null
        };

    }
    componentDidMount() {


    }

    onProcessCart = (order) => {
        this.setState({ ...this.state, order: order });
        CreatePaymentIntent({ orderId: order.id })
            .then((data) => this.setState({ clientSecret: data.clientSecret }));
            
    }

    render() {
        const options = {
            clientSecret: this.state.clientSecret,
            appearance: {
                theme: 'stripe',
            },
        };

        return (
            <div >
                <Row className=' process'>
            
                    
                    <Col sm={11} md={8} lg={6} className='process-component '>
                        <GetShoppingCartComponent onProcessOrder={(order) => this.onProcessCart(order)} />
                    </Col>

                    <Col sm={11} md={6} lg={5} className='process-component ' >



                        {options.clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <PurchasingFormComponent />
                            </Elements>
                        )}
                    </Col>
                </Row>
            </div>

        );
    }

}
