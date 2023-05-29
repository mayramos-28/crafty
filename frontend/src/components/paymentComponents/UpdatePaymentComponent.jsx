
import { useDispatch, useSelector } from "react-redux";
import { fetchPaymentType, selectAllPaymentType, selectPaymentTypeError, selectPaymentTypeLoading, updatePaymentType } from "../../store/slices/PaymentType";
import { useEffect, useRef } from "react";
import { PaymentFormComponent } from "./PaymentFormComponent";


export const UpdatePaymentComponent = ({ userId }) => {

    const firstExecution = useRef(true);
    const paymentsType = useSelector(selectAllPaymentType);
    const error = useSelector(selectPaymentTypeError);
    const loading = useSelector(selectPaymentTypeLoading);
    const dispatch = useDispatch();


    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchPaymentType({ userId }));
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution, userId]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    if(paymentsType.length === 0){
        return <div> No tienes metodos de pago guardados</div>;
    }

    return (
        <div className="dates-update">
            {
                paymentsType.map((paymentType) => (
                    <PaymentFormComponent key={paymentType.id}
                        paymentType={paymentType}
                        onSubmit={(values) => {
                            dispatch(updatePaymentType(values));
                        }}
                    />
                ))
            }
        </div>
    );
};


