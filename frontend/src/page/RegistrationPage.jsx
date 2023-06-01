import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/register/registerSlice";
import { registerUserThunk } from "../store/slices/register/registerThunk";
import { Input } from "../components/forms/Input.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row, Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { RegisterFormComponent } from "../components/forms/RegisterFormComponent";

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const { isLoading, error, success } = useSelector((state) => state.register);
  const user = {
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',

  }

  if (isLoading) return (<Spinner animation="border" variant="primary" />)
  if (success) return (<Navigate to="/profile/my-area" />)

  return (
    <div className="row justify-content-center">

      <div className=" col-12 col-sm-8 col-md-6 col-lg-5" >    

        <RegisterFormComponent
          key={user.id}
          btnValue={'Registrarme'}
          labelValue={'Registro de usuario'}
          user={user}
          onSubmit={values => {
            dispatch(registerUserThunk(values));
          }}
        />


      </div>
    </div>


  );
};
