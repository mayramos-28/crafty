import { useDispatch } from "react-redux";
import { ProductFormComponent } from "./ProductFormComponent";
import { createFileProduct } from "../../store/slices/FIleProductSlice";
import { createProduct } from "../../store/slices/ProductSlice";

export const ProductCreateComponent = ({ sellerId }) => {

    const dispatch = useDispatch();
    const product = {
        name: '',
        description: '',
        price: '',
        stock: '',
        categoryId: 1,
        imageId: '',
        sellerId: sellerId
    }
    const image = {
        attached: '',
        description: '',
    }



    return (
        <div className="">

            <ProductFormComponent
                key={product}
                product={product}
                onSubmit={async (values) => {
                    const file = (await (dispatch(createFileProduct({
                        attached: values.imageUrl,
                        description: values.description || ''
                    })))).payload;
                    debugger;

                    dispatch(createProduct({ ...values, imageId: file.id }));
                }}
            />


        </div>

    );

};