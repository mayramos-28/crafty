import { useDispatch, useSelector } from "react-redux";
import { CardComponent as CategoryCard } from "../components/Card";
import { useEffect, useState } from "react";
import { fetchCategories, selectAllCategories, selectCategoryError, selectCategoryLoading } from "../store/slices/categorySlice";
import { MainCarousel } from "../components/MainCarousel";


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
        <div className="mainPage flex-grow-1 ">
            <div className="mainPage__carousel">
                <MainCarousel />
                
            </div>
            <div className="homePage">                
                <div className="mainProducts d-flex justify-content-around py-4 px-4 row gap-2">                    
                    {
                        categories.map((category) => (
                            <CategoryCard key={category.id} props={category} linkTo={`/products?categoryId=${category.id}`}></CategoryCard>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}