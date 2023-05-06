import { LoginPage } from "./../components/forms/LoginPage";
import { Route, Routes } from "react-router-dom";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,

} from "react-bootstrap";
import { RegistrationPage } from "../components/forms/RegistrationPage";
import { HomePage } from "../page/HomePage";
import { ProfilePage } from "../page/ProfilePage";
import { ProductsPage } from "../components/Products/ProductsPage";
import { ProductDetailPage } from "../page/ProductDetailPage";
import { UserInformationPage } from "../page/UserInformationPage";
// import { ConsumerPage } from "../page/ConsumerPage";
import { SellerPage } from "../page/SellerPage";
import { LogoutLink } from "../components/LogoutComponete";

export const MainLayout = () => {
  const isLogged = localStorage.getItem("token") !== null;
  return (
    <div className="mainLayout flex-grow-1 ">

      <Navbar bg="dark-subtle" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="crafty">Crafty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="/">Inicio</Nav.Link>
              {isLogged &&  <Nav.Link href="/profile">Perfil</Nav.Link>}
              {!isLogged && <Nav.Link href="/login">Login</Nav.Link>}                   
              {!isLogged && <Nav.Link href="/register">Registro</Nav.Link>}

              {isLogged ? <NavDropdown title="Acciones" id="basic-nav-dropdown">                
                <NavDropdown.Item href="/profile/my-area">
                  Mi area personal
                </NavDropdown.Item>
                <NavDropdown.Item />
                <LogoutLink />
                </NavDropdown>
               : null }



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="">
        <Routes>
          <Route exact path="/login" Component={LoginPage} />
          <Route exact path="/register" Component={RegistrationPage} />
          <Route exact path="/products" Component={ProductsPage} />
          <Route exact path="/products/:productId" Component={ProductDetailPage} />



          <Route path="profile" Component={ProfilePage}>
            <Route exact path="my-area" Component={UserInformationPage} />
            {/* <Route exact path="shopping" Component={ConsumerPage} /> */}
            <Route exact path="sales" Component={SellerPage} />
            <Route exact path="inicio" Component={HomePage} />
          </Route>

          <Route path="/" Component={HomePage}></Route>
        </Routes>
      </section>
    </div>
  );
}