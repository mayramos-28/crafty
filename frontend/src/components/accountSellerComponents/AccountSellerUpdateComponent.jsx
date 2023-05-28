import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountSellerFormComponent } from "./AccountSellerFormComponent";
import { fetchSellerAccount, selectAllSellerAccount, selectSellerAccountError, selectSellerAccountLoading, updateAccountSeller } from "../../store/slices/SellerAccountSlice";


 
export const AccountSellerUpdateComponent = ({ sellerId }) => {

    const firstExecution = useRef(true);
    const dispatch = useDispatch();
    const [account] = useSelector(selectAllSellerAccount);
    const error = useSelector(selectSellerAccountError);
    const loading = useSelector(selectSellerAccountLoading);

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchSellerAccount({ sellerId }));
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
        <AccountSellerFormComponent
            key={account.id}
            account={account}
            onSubmit={(values) => {
                dispatch(updateAccountSeller(values));
            }}
        ></AccountSellerFormComponent>
    </div>
  );

};