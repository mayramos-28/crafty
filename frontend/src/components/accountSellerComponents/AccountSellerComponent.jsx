import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerAccount, selectAllSellerAccount } from "../../store/slices/SellerAccountSlice";
import { CreateAccountSellerComponent } from "./CreateAccountSellerComponent";
import { AccountSellerUpdateComponent } from "./AccountSellerUpdateComponent";
import { fetchAuthUser } from "../../store/slices/authUserSlice";

export const AccountSellerComponent = () => {
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const accountSeller = useSelector(selectAllSellerAccount);
    const { authUser } = useSelector((state) => state.authUser);
    const sellerId = authUser?.seller?.id;

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);

    useEffect(() => {
        if (authUser) {
            dispatch(fetchSellerAccount({ sellerId }));
            firstExecution.current = false;
        }
    }, [dispatch, authUser]);


    if (accountSeller.length === 0) {
        return (
            <div className="">
                <h3>No tienes métodos de pago activados</h3>

                <div className="">
                      {sellerId && (<CreateAccountSellerComponent sellerId={sellerId}></CreateAccountSellerComponent>)}
                </div>
              

            </div>)
    }
    return (
        <>
            <h4>Mi cuenta de pago</h4>
            <AccountSellerUpdateComponent sellerId={sellerId}></AccountSellerUpdateComponent>


        </>
    )

};