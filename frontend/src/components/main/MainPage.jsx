import { MainCarousel } from "./MainCarousel";
import { MainProducts } from "./MainProducts";

export const MainPage = () => {

    return (
        <div className="mainPage  ">
        <div className="mainPage__carousel">
            <MainCarousel />
        </div>
        <div className="mainPage__products">
            <MainProducts />
        </div> 
        </div>
    );

}