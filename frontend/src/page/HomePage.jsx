import { useDispatch, useSelector } from "react-redux";
import { CategoryCard } from "../components/CategoryCard";
import { useEffect, useState } from "react";
import { fetchCategories, selectAllCategories, selectCategoryError, selectCategoryLoading } from "../store/slices/categorySlice";
import { MainCarousel } from "../components/main/MainCarousel";

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
        <div className="mainPage  ">
            <div className="mainPage__carousel">
                <MainCarousel />
                
            </div>
            <div className="homePage">
                
                <div className="mainProducts d-flex justify-content-around py-4 px-4 row gap-2">
                    
                    {
                        categories.map((category) => (<CategoryCard key={category.id} category={category}></CategoryCard>))
                    }
                </div>
            </div>
        </div>
    );
}