import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImageByDefault from "./../../assets/image/by-default.jpg";
import { Col, Image, Row } from 'react-bootstrap';
import { UserUpdateComponent } from './UserUpdateComponent';


export const UserInformationComponent = ({ authUser }) => {

    const seller = authUser?.seller;
    const user = authUser?.user;

  

    return (
        <>
            <div className='col-12 col-md-8 col-lg-5 '>
                
                    {user && (<UserUpdateComponent user={user}></UserUpdateComponent>)}

             
            </div>

        </>
    );
};

