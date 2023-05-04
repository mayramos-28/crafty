
import {  NavDropdown } from "react-bootstrap";
import {  useNavigate } from 'react-router-dom';

export const LogoutLink = () => {
    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem('token');
        navigate('/');
    }

    return (
       
        <NavDropdown.Item to="#" onClick={handleLogout}>
            Cerras sesion
        </NavDropdown.Item>
    );

}


