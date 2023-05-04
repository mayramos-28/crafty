

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../store/slices/authUserSlice";
import { ConsumerPage } from "./ConsumerPage";

import Nav from 'react-bootstrap/Nav';

export const UserInformationPage = () => {
    const firstExecution = useRef(true);
    const dispatch = useDispatch();

    const { authUser, isLoading, error } = useSelector((state) => state.authUser);


    useEffect(() => {
        if (firstExecution.current) {
            dispatch(fetchAuthUser());
            firstExecution.current = false;
        }
    }, [dispatch, firstExecution]);




    return (
        <div className="loginPage">    
        <h1>Mi perfil</h1>
        <h2> {authUser?.details?.seller?.bussnessName}</h2>

        <div>
                <ul>
                    <li> {authUser?.details?.seller?.bussnessEmail} </li>                   
                </ul>
            </div> 
            <ul>
               { Object.keys(authUser?.details?.seller ?? {}).map((key) => 
                <li> {key}: {authUser?.details?.seller[key]} </li> )}
                
            </ul>
            
            
        </div>
    );
}