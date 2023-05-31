import { useDispatch, useSelector } from "react-redux";
import { ProductFormComponent } from "./ProductFormComponent";
import { createFileProduct } from "../../store/slices/FIleProductSlice";
import { createProduct } from "../../store/slices/ProductSlice";
import { useEffect, useRef } from "react";
import { fetchAuthUser } from "../../store/slices/authUserSlice";

export const ProductCreateComponent = () => {

    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const { authUser } = useSelector((state) => state.authUser);

    const sellerId = authUser?.seller?.id;
    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);



    const product = {
        name: '',
        description: '',
        price: '',
        stock: '',
        categoryId: '',
        imageId: '',
        sellerId: sellerId
    }
    const image = {
        attached: '',
        description: '',
    }



    return (
            <ProductFormComponent
                product={product}
                onSubmit={async (values) => {
                    const file = (await (dispatch(createFileProduct({
                        attached: values.imageUrl,
                        description: values.description || ''
                    })))).payload;


                    dispatch(createProduct({ ...values, imageId: file.id }));
                }}
                btn={'Crear'}

            />


    );

};