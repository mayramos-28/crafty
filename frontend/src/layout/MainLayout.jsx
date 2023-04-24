import { LoginPage } from "./../components/forms/LoginPage";
import { Form, NavLink, Route, Routes } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,

} from "react-bootstrap";
import { RegistrationPage } from "../components/forms/RegistrationPage";
import { HomePage } from "../page/HomePage";

export const MainLayout = () => {
    return (
        <div className="mainLayout">
            
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="crafty">Crafty</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Registro</Nav.Link>
                
                
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="h-90">
          <Routes>
            <Route exact path="/login" Component={LoginPage} />
            <Route exact path="/register" Component={RegistrationPage} />
            <Route path="/" Component={HomePage}></Route>
          </Routes>
        </section>
        </div>
    );
}