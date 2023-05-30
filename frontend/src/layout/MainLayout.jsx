
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


export const MainLayout = ({menu}) => {

  const counter = useSelector((state) => state.cart.counter);
  const isLogged = localStorage.getItem("token") !== null;
  


  return (
    <div className="d-flex flex-column flex-grow-1 ">
      <Navbar className="mainLayoutNav" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="crafty ">Crafty</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">


              <Nav.Link href="/" className="font-link"> Inicio</Nav.Link>
              {isLogged && <Nav.Link href="/profile/my-area" className="font-link">Perfil</Nav.Link>}
              {!isLogged && <Nav.Link href="/login" className="font-link">Login</Nav.Link>}
              {!isLogged && <Nav.Link href="/register" className="font-link">Registro</Nav.Link>}


              {isLogged && counter > 0 && <Nav.Link href="/purchasingProcess" className="font-link"><div >
                <i className="bi bi-cart3 ont-link"><Badge bg="secondary">{counter} <span>Comprar</span> </Badge> </i>
              </div> </Nav.Link>}
            </Nav>


            {isLogged ? <Nav.Link className="font-link"  ><LogoutLink /></Nav.Link>
              : null}
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <section className="d-flex flex-grow-1 py-1">


        {
          menu && (
            <aside className="border col-2">
              <ul className="list-group">
              {
                menu.map((item) => (
                  <li className="list-group-item"><Nav.Link as={NavLink}  to={item.url}>{item.label}</Nav.Link></li>
                ))
              }
              </ul>
            </aside>

          )
        }

        <main className="border col-10">



          <Routes>
            <Route exact path="/login" Component={LoginPage}  />
            <Route exact path="/register" Component={RegistrationPage} />
            <Route exact path="/products" Component={ProductsPage} />
            <Route exact path="/products/:productId" Component={ProductDetailPage} />
            <Route path="/purchasingProcess" Component={PurchasingProcessComponent} />
            <Route path="/purchasingProcess/result" Component={PaymentResultComponent} />


            <Route path="profile" Component={ProfilePage} >
              <Route exact path="my-area" Component={UserInformationPage} />
              <Route exact path="purchases" Component={UserOrdersPage} />
              <Route exact path="sales" Component={SellerPage} />
              <Route exact path="product/edit/:productId" Component={ProductUpdateComponent} />
              <Route exact path="inicio" Component={HomePage} />
            </Route>


            <Route path="/" Component={HomePage}></Route>
          </Routes>

        </main>

      </section>
      <footer className=" "  >
          
                <em className="">© 2023 Copyright; Crafty.SL</em> 
                
          
     
        </footer>
    </div>
  );
}

