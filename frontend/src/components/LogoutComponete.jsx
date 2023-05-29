
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
            <i className="bi bi-box-arrow-left"></i>
        </NavDropdown.Item>
    );

}


