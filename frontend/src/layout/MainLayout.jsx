import { LoginPage } from "./../components/forms/LoginPage";
import { Route, Routes } from "react-router-dom";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,

} from "react-bootstrap";
import { RegistrationPage } from "../components/forms/RegistrationPage";
import { HomePage } from "../page/HomePage";
import { ProfilePage } from "../page/ProfilePage";
import { ProductsPage } from "../page/ProductsPage";
import { ProductDetailPage } from "../page/ProductDetailPage";
import { UserInformationPage } from "../page/UserInformationPage";
// import { ConsumerPage } from "../page/ConsumerPage";
import { SellerPage } from "../page/SellerPage";
import { LogoutLink } from "../components/LogoutComponete";
import { CostumerPage } from "../page/CostumerPage";
import { useSelector } from "react-redux";
import { PurchasingProcessComponent } from "../components/purchasingProcessComponents/purchasingProcessComponent";

export const MainLayout = () => {

  const counter = useSelector((state) => state.cart.counter);
  console.log('counter', counter)
  const isLogged = localStorage.getItem("token") !== null;
  return (
    <div className=" flex-grow-1 ">
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
             
              <Nav.Link href="#" className="font-link"><div >
                  <i className="bi bi-cart3"><Badge bg="secondary">{counter}</Badge><Nav.Link href="/purchasingProcess"></Nav.Link> </i>
                </div> </Nav.Link>
            </Nav>

            {isLogged ?  <Nav.Link className="font-link"  ><LogoutLink /></Nav.Link>
                : null}
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <section className="">
        <Routes>
          <Route exact path="/login" Component={LoginPage} />
          <Route exact path="/register" Component={RegistrationPage} />
          <Route exact path="/products" Component={ProductsPage} />
          <Route exact path="/products/:productId" Component={ProductDetailPage} />

          <Route path="profile" Component={ProfilePage} >
            <Route exact path="my-area" Component={UserInformationPage} />
            <Route exact path="purchases" Component={CostumerPage} />
            <Route exact path="sales" Component={SellerPage} />
            <Route exact path="inicio" Component={HomePage} />
          </Route>
          <Route path="/purchasingProcess" Component={PurchasingProcessComponent} />

          <Route path="/" Component={HomePage}></Route>
        </Routes>
      </section>
    </div>
  );
}
// render={(props) => <ProductsPage {...props}  addToCart={addToCart} removeFromCart={removeFromCart} />} 
