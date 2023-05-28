
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowProduct, selectProductById } from "../../store/slices/ProductSlice";
import { deleteProduct, updateProduct } from "../../api/productsApi";

import { fetchCategories, selectAllCategories } from "../../store/slices/categorySlice";
import { ProductFormComponent } from "./ProductFormComponent";


export const ProductUpdateComponent = () => {

    const { productId } = useParams();
    const firstExecution = useRef(true);
    const dispatch = useDispatch();

    const product = useSelector(state => selectProductById(state, productId))
    const categories = useSelector(selectAllCategories);

    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchShowProduct(productId));
            const init = async () => dispatch(fetchCategories());
            const isFirst = firstExecution;
            firstExecution.current = false;
            isFirst && init();
        }

    }, [dispatch, firstExecution]);

    const handleDeleteProduct = () => {
        dispatch(deleteProduct(productId));
    };

    return (
        <div className="dates-update">
            <h2>Actualizar Producto</h2>
            <ProductFormComponent
                key={productId}
                product={product}
                categories={categories}
                onDelete={handleDeleteProduct}
                onSubmit={(values) => {
                    dispatch(updateProduct(values));
                }}
            />

        </div>

    )
};
