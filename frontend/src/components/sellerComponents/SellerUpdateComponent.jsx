import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../../store/slices/authUserSlice";
import { selectSellerError, selectSellerLoading, updateSeller } from "../../store/slices/SellerSlice";
import { SellerFormComponent } from "./SellerFormComponent";


export const SellerUpdateComponent = ({seller}) => {

    const dispatch = useDispatch();
    const loading = useSelector(selectSellerLoading);
    const error = useSelector(selectSellerError);
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    

      return (
        <div className="">
          <div>
            <SellerFormComponent
            key={seller.id}
            seller={seller}
            valueBtn='Actualizar'
            labelForm='Mi información de vendedor'
            onSubmit={(values) => {
                dispatch(updateSeller({ ...values }));
            }}
            
            />
        </div>

        </div>
      );
    };