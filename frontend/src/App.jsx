
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/style/index.css";
import { MainLayout } from "./layout/MainLayout";
import { FooterLayout } from "./layout/FooterLayout";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingCart } from "./store/slices/CartSlice";
import { fetchAuthUser } from "./store/slices/authUserSlice";



function App() {
  const dispatch = useDispatch();
  const firstExecution = useRef(true);
  useEffect(() => {
    if (firstExecution.current) {
      dispatch(fetchAuthUser()).then(() => { dispatch(fetchShoppingCart()) });
      firstExecution.current = false;
    }
  }, [dispatch, firstExecution]);

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
