
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/style/index.css";
import { MainLayout } from "./layout/MainLayout";
import { FooterLayout } from "./layout/FooterLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function App() {

  // const cartItems = useSelector((state) => state.cart.cartItems);

  // useEffect(() => {
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  // const handleBeforeUnload = () => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  return (
    <>
      <div className="App d-flex flex-column">
        <MainLayout></MainLayout>
        <FooterLayout></FooterLayout>
      </div>
    </>
  );
}

export default App;
