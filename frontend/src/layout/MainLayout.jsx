
import { NavLink, Route, Routes } from "react-router-dom";
import {
  Badge,
  Container,
  Nav,
  Navbar,

} from "react-bootstrap";
import { RegistrationPage } from "../page/RegistrationPage";
import { HomePage } from "../page/HomePage";
import { ProfilePage } from "../page/ProfilePage";
import { ProductDetailPage } from "../page/ProductDetailPage";
import { ProductsPage } from "../page/ProductsPage";
import { UserInformationPage } from "../page/UserInformationPage";
import { SellerPage } from "../page/SellerPage";
import { LogoutLink } from "../components/LogoutComponete";
import { useSelector } from "react-redux";
import { PurchasingProcessComponent } from "../components/purchasingProcessComponents/purchasingProcessComponent";
import { ProductUpdateComponent } from "../components/ProductComponents/ProductUpdateComponent";
import { PaymentResultComponent } from "../components/purchasingProcessComponents/PaymentResultComponent";
import { LoginPage } from "../page/LoginPage";
import { UserOrdersPage } from "../page/UserOrdersPage";
import { useState } from "react";
import { AddressPage } from "../page/AddressPage";
import { AddressCreateComponent } from "../components/addressComponents/createAddressComponet";
import { SellerUpdateComponent } from "../components/sellerComponents/SellerUpdateComponent";
import { ProductCreateComponent } from "../components/ProductComponents/ProductCreateComponent";
import { AccountSellerFormComponent } from "../components/accountSellerComponents/AccountSellerFormComponent";
import { ShowSellerProducts } from "../page/ShowSellerProducts";
import { AccountSellerComponent } from "../components/accountSellerComponents/AccountSellerComponent";
import { SellerOrdersPage } from "../page/SellerOrdersPage";
import { EditAddressPage } from "../page/EditAddressPage";


export const MainLayout = ({ menu }) => {

  const counter = useSelector((state) => state.cart.counter);
  const isLogged = localStorage.getItem("token") !== null;
  const sellrMenu = [];

  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="d-flex flex-column flex-grow-1 ">
      <Navbar className="mainLayoutNav" expand="sm">

        <div className="d-flex justify-content-between w-100 px-2">

          <Navbar.Brand href="/" className="crafty flex-grow-1">Crafty</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ maxWidth: "20%" }} />
        </div>


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto px-5 align-items-center">


            <Nav.Link as={NavLink} to="/" className="font-link"> Inicio</Nav.Link>
            {isLogged && <Nav.Link as={NavLink} to="/profile/my-area" className="font-link">Perfil</Nav.Link>}
            {!isLogged && <Nav.Link as={NavLink} to="/login" className="font-link">Login</Nav.Link>}
            {!isLogged && <Nav.Link as={NavLink} to="/register" className="font-link">Registro</Nav.Link>}

            {isLogged && counter > 0 && <Nav.Link as={NavLink} to="/purchasingProcess" className="font-link"><div >
              <i className="bi bi-cart3 ont-link"><Badge bg="secondary">{counter} <span>Comprar</span> </Badge> </i>
            </div> </Nav.Link>}

            {isLogged ? <Nav.Link className="font-link" style={{ fontSize: "2rem" }} ><LogoutLink /></Nav.Link>
              : null}
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      <section className="d-flex flex-grow-1 py-1">


        {menu && (
          <button type="button"
            className="btn-toggle-asside-menu"
            onClick={toggleMenu}
          >
            {showMenu
              ? <i class="bi bi-arrow-bar-left bi-bold bi-2xl"></i>
              : <i class="bi bi-arrow-bar-right bi-bold bi-2xl"></i>
            }
          </button>
        )}
        {
          menu && showMenu && (
            <aside className="border col-6 col-md-3 col-lg-2 ">
              <ul className="list-group">
                {
                  menu.map((item) => (
                    <li className="list-group-item btn-hover"><Nav.Link as={NavLink} to={item.url}>{item.label}</Nav.Link></li>
                  ))
                }
              </ul>
            </aside>

          )
        }

        <main className="col d-flex justify-content-center py-3">

          <div className="container-fluid g-xs-0">
            <Routes>
              <Route exact path="/login" Component={LoginPage} />
              <Route exact path="/register" Component={RegistrationPage} />
              <Route exact path="/products" Component={ProductsPage} />
              <Route exact path="/products/:productId" Component={ProductDetailPage} />
              <Route path="/purchasingProcess" Component={PurchasingProcessComponent} />
              <Route path="/purchasingProcess/result" Component={PaymentResultComponent} />

              <Route path="profile" Component={ProfilePage} >
                <Route exact path="my-area" Component={UserInformationPage} />
                <Route exact path="addresses" Component={AddressPage} />
                <Route exact path="addresses/edit/:addressId" Component={EditAddressPage} />
                <Route exact path="addresses/create" Component={AddressCreateComponent} />
                <Route exact path="purchases" Component={UserOrdersPage} />

                <Route path="seller" Component={SellerPage} >
                  <Route exact path="salesdata" Component={SellerUpdateComponent} />
                  <Route exact path="products/seller" Component={ShowSellerProducts} />
                  <Route exact path="product/edit/:productId" Component={ProductUpdateComponent} />
                  <Route exact path="newProduct" Component={ProductCreateComponent} />
                  <Route exact path="accounts" Component={AccountSellerComponent} />
                  <Route exact path="sales" Component={SellerOrdersPage} />

                  <Route exact path="" Component={SellerUpdateComponent} />
                </Route>
                <Route exact path="inicio" Component={HomePage} />
              </Route>


              <Route path="/" Component={HomePage}></Route>
            </Routes>
          </div>

        </main>

      </section>
      <footer className=" "  >
        <em className="">© 2023 Copyright; Crafty.SL</em>
      </footer>
    </div>
  );
}

