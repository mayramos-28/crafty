import { useDispatch, useSelector } from "react-redux";
import { CardComponent as CategoryCard } from "../components/Card";
import { useEffect, useState } from "react";
import { fetchCategories, selectAllCategories, selectCategoryError, selectCategoryLoading } from "../store/slices/categorySlice";
import { MainCarousel } from "../components/MainCarousel";
import { Col, Row } from "react-bootstrap";


export const HomePage = () => {
    const categories = useSelector(selectAllCategories);
    const error = useSelector(selectCategoryError);
    const isLoading = useSelector(selectCategoryLoading);
    const dispatch = useDispatch();
    const [firstExecution, setFirstExecution] = useState(true);


    useEffect(() => {
        const init = async () => dispatch(fetchCategories());
        const isFirst = firstExecution;
        setFirstExecution(false);
        isFirst && init();

    }, [dispatch, firstExecution]);



    return (

        <>
               <Row >
                <Col md={12}> <MainCarousel /> </Col>
                <Col>
                    <Row className="gap-3 py-5 d-flex justify-content-center">

                        {categories.map((category) => (
                            <Col  sm={11} md={4} lg={2}   className="d-flex justify-content-center">
                            <CategoryCard key={category.id} props={category} linkTo={`/products?categoryId=${category.id}`}></CategoryCard>
                            </Col>
                        ))
                        }

                    </Row>

                </Col>
            </Row>
            <div className="mainPage flex-grow-1 ">
                <div className="mainPage__carousel">


                </div>
                <div>
                    <div className="">

                    </div>
                </div>

            </div>
        </>
    );
}