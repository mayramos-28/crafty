

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { ConsumerPage } from "./ConsumerPage";

import Nav from 'react-bootstrap/Nav';
import { Button, Collapse } from "react-bootstrap";
import { AddressComponent } from "../components/AddressComponent";

export const UserInformationPage = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const firstExecution = useRef(true);
    const dispatch = useDispatch();

    const { authUser, isLoading, error } = useSelector((state) => state.authUser);
    const userId = authUser?.user?.id;


    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);




    return (
        <div className="loginPage">
            <h1>Mi perfil</h1>
            <div className="row">
                <div className="col-xxl-6 col-sm-12">
                    <h2>Informacion de contacto</h2>
                    <ul>
                        {Object.keys(authUser?.seller ?? {}).map((key) =>
                            <li> {key}: {authUser?.seller[key]} </li>)}
                    </ul>
                    <ul>
                        <li>
                            {Object.keys(authUser?.user ?? {}).map((key) =>
                                <li> {key}: {authUser?.user[key]} </li>)}

                        </li>
                    </ul>


                </div>
                <div className="col-xxl-6 col-sm-12 d-flex flex-column gap-2 py-2">
               

                    <div className="d-flex flex-column w-100 ">

                        <Button className={open ? "d-none" : "d-block"}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            size="lg"
                        >
                            Ver mis direcciones
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                <h2>Mis direcciones guardadas</h2>
                              
                                <AddressComponent userId={userId}></AddressComponent>


                            </div>
                        </Collapse>

                        <Button
                            className={open ? "d-block" : "d-none"}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}

                            size="lg"
                        >
                            Ocultar direcciones
                        </Button>
                    </div>

                    <div className="d-flex flex-column w-100 ">

                        <Button className={open2 ? "d-none" : "d-block"}
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open2}
                            size="lg"
                        >
                            Ver mis métodos de pago
                        </Button>
                        <Collapse in={open2}>
                            <div id="example-collapse-text">
                                <h2>Mis métodos de pago guardadas</h2>


                            </div>
                        </Collapse>

                        <Button
                            className={open2 ? "d-block" : "d-none"}
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open2}

                            size="lg"
                        >
                            Ocultar direcciones
                        </Button>
                    </div>



                </div>

            </div>



        </div>
    );
}