import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../store/slices/login/loginThunk";
import { setUser } from "../store/slices/login";
import { Input } from "../components/forms/Input.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row, Spinner } from "react-bootstrap";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { LoginFormComponent } from "../components/forms/LoginFormComponent";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { fetchShoppingCart } from "../store/slices/CartSlice";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, success, user } = useSelector(
    (state) => state.login
  );

  const navigate = useNavigate();

  const isLogged = localStorage.getItem("token") !== null;

  // if (isLogged) {
  //   return <Navigate as={NavLink} to="/products" />;
  // }
  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-content-center'>

        <Spinner animation="border" variant="info" as="div" role="status" style={{ fontWeight: '80rem' }} />
      </div>)
  }
  return (
    <div className="row justify-content-center">

      <div className=" col-12 col-sm-8 col-md-6 col-lg-4" >

        <LoginFormComponent
          key={user.id}
          btnValue={'Iniciar sesión'}
          labelValue={'Inicio de sesión'}
          user={user}
          onSubmit={values => {
            dispatch(loginUserThunk(values))
              .then(async () => {
                await dispatch(fetchAuthUser());
                await dispatch(fetchShoppingCart());
                navigate('/')
              });
          }}
        />


      </div>
    </div>

  );



}