import { useDispatch, useSelector } from "react-redux";
import { CardComponent as CategoryCard } from "../components/Card";
import { useEffect, useState } from "react";
import { fetchCategories, selectAllCategories, selectCategoryError, selectCategoryLoading } from "../store/slices/categorySlice";
import { MainCarousel } from "../components/MainCarousel";
import { Col, Nav, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";


export const HomePage = () => {
    const categories = useSelector(selectAllCategories);
    const error = useSelector(selectCategoryError);
    const isLoading = useSelector(selectCategoryLoading);
    const dispatch = useDispatch();
    const [firstExecution, setFirstExecution] = useState(true);


    useEffect(() => {
        const init = async () => dispatch(fetchCategories());
        const isFirst = firstExecution;
        setFirstExecution(false);
        isFirst && init();

    }, [dispatch, firstExecution]);




    return (
        <div className=" d-flex flex-column justify-content-center">
          <h1 className="text-center">¡Bienvenido a Crafty!</h1>
          <p className="text-center">
            Tu lugar de encuentro para artículos artesanales únicos
          </p>
      
          <div className="">
            <div className="">
              {/* Imagen y contenido de "Amplia variedad de productos" */}
            </div>
      
            <div className="">
              {/* Imagen y contenido de "Vendedores confiables" */}
            </div>
      
            <div className="">
              {/* Imagen y contenido de "Gestión segura de pagos y pedidos" */}
            </div>
      
            <div className="">
              {/* Imagen y contenido de "Almacenamiento y envío confiables" */}
            </div>
          </div>
      
          <div className="">
            <h2 className="text-center">¡Únete a nuestra comunidad!</h2>
            <h3>Como comprador o vendedor, tenemos un lugar para ti!</h3>
            <p className="text-center">
              Ya sea que estés buscando un regalo único o quieras compartir tus creaciones con el mundo,
              Crafty es el lugar ideal para ti. Explora nuestro marketplace, descubre nuevas pasiones y
              sumérgete en el maravilloso mundo de la artesanía.
            </p>
          </div>
      
          <div className="text-center">
            <h2 className="">¡Contáctanos!</h2>
            <p className="">
              Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en ponerte en contacto con
              nuestro equipo de atención al cliente.
            </p>
            <div className="text-center">
              <p>Teléfono: +34 622657878</p>
              <p>Correo electrónico: info@crafty.com</p>
              <p>Dirección: Calle Artesanía 123, Ciudad Artesana, España</p>
            </div>
          </div>
        </div>
      );
      
}