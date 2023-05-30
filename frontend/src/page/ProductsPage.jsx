import { MainCarousel } from "../components/MainCarousel";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { fetchProducts, selectAllProducts, selectProductError, selectProductLoading } from "../store/slices/ProductSlice";
import { Spinner } from "react-bootstrap";
import { useLocation, useSearchParams } from "react-router-dom";
import { CardProductComponent } from "../components/CardProductComponete";
import { fetchCategories } from "../store/slices/categorySlice";
import { connect } from "react-redux";
import { withRouter } from "react-router";


export const ProductsPage = () => {

    const Products = useSelector(selectAllProducts);
    const error = useSelector(selectProductError);
    const isLoading = useSelector(selectProductLoading);
    const dispatch = useDispatch();
    const firstExecution = useRef(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryId = searchParams.get("categoryId");

    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        console.log(categoryId)
        categoryId && dispatch(fetchProducts({ categoryId }))
    }, [categoryId]);

    return (
        <>
            <div className="mainPage  ">

                <div className="mainPage__carousel">
                    <MainCarousel />
                </div>

                <div className="align-product">
                    <div className="mainProducts d-flex justify-content-around py-4 px-4 row gap-2">
                        {
                            Products.map((product) => (<CardProductComponent key= {product.id} props={product} linkTo={`/products/${product.id}`}   ></CardProductComponent>))
                        }
                    </div>
                 </div>
                 {isLoading && <Spinner />}
                 {error && <div className="alert alert-danger">{error}</div>}
             </div>

         </>

    )
}
    ;