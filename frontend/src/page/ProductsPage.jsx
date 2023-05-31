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
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-6">
                        {
                            Products.map((product) => (
                                <div className="col">
                                    <CardProductComponent key={product.id}

                                        className={"h-100"}
                                        props={product}
                                        linkTo={`/products/${product.id}`}
                                    /></div>))
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