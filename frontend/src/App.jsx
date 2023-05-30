
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/style/index.css";
import { MainLayout } from "./layout/MainLayout";
import { FooterLayout } from "./layout/FooterLayout";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingCart } from "./store/slices/CartSlice";
import { fetchAuthUser } from "./store/slices/authUserSlice";
import { current } from "@reduxjs/toolkit";
import { fetchCategories, selectAllCategories, selectCategoryError, selectCategoryLoading } from "./store/slices/categorySlice";
import { useLocation } from "react-router-dom";



function App() {
  const dispatch = useDispatch();
  const firstExecution = useRef(true);
  const [menu, setMenu] = useState(null);
  const location = useLocation();
  const [isLoadingMenu, setIsLoadingMenu] = useState(true);

  useEffect(() => {
    if (firstExecution.current) {
      dispatch(fetchAuthUser()).then(() => { dispatch(fetchShoppingCart()) });
      firstExecution.current = false;
    }
  }, [dispatch, firstExecution]);


  useEffect(() => {
    console.log('change location', location.pathname);
    setIsLoadingMenu(true);
    switch (true) {
      case location.pathname === '/':
      case location.pathname.startsWith('/products'):
      case location.pathname.startsWith('/purchasingProcess'):
        dispatch(fetchCategories()).then(({ payload }) => {
          setMenu(payload.map((category) => (
            { label: category.name, url: `/products?categoryId=${category.id}` }
          )));
          setIsLoadingMenu(false);
        });
        break;
      case location.pathname.startsWith('/profile'):
        const userMenu = [
          { label: 'Mi perfil', url: '/profile/my-area' },
          { label: 'Mis direcciones', url: '/profile/addresses' },
          { label: 'Mis compras', url: '/profile/purchases' },
          { label: 'Area de venta', url: '/profile/seller' },
        ];
        setMenu(userMenu);
        setIsLoadingMenu(false);
        break;
      default:
        setMenu(null);
        setIsLoadingMenu(false);
    }



  }, [dispatch, location.pathname, ]);


  return (
    <>
      <div className="App d-flex flex-column">
        {isLoadingMenu || <MainLayout menu={menu}></MainLayout>}
        {/* <FooterLayout></FooterLayout> */}
      </div>
    </>
  );
}

export default App;
