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
        <div className="homepage d-flex flex-column justify-content-center">
          <h1 className="homepage-title">¡Bienvenido a Crafty!</h1>
          <p className="homepage-description">
            Tu lugar de encuentro para artículos artesanales únicos
          </p>
      
          <div className="homepage-highlights">
            <div className="highlight">
              {/* Imagen y contenido de "Amplia variedad de productos" */}
            </div>
      
            <div className="highlight">
              {/* Imagen y contenido de "Vendedores confiables" */}
            </div>
      
            <div className="highlight">
              {/* Imagen y contenido de "Gestión segura de pagos y pedidos" */}
            </div>
      
            <div className="highlight">
              {/* Imagen y contenido de "Almacenamiento y envío confiables" */}
            </div>
          </div>
      
          <div className="homepage-cta">
            <h2 className="cta-title">¡Únete a nuestra comunidad!</h2>
            <p className="cta-description">
              Ya sea que estés buscando un regalo único o quieras compartir tus creaciones con el mundo,
              Crafty es el lugar ideal para ti. Explora nuestro marketplace, descubre nuevas pasiones y
              sumérgete en el maravilloso mundo de la artesanía.
            </p>
          </div>
      
          <div className="homepage-contact">
            <h2 className="contact-title">¡Contáctanos!</h2>
            <p className="contact-description">
              Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en ponerte en contacto con
              nuestro equipo de atención al cliente.
            </p>
            <div className="contact-info">
              <p>Teléfono: +1 123-456-7890</p>
              <p>Correo electrónico: info@crafty.com</p>
              <p>Dirección: Calle Artesanía 123, Ciudad Artesana, País Artesanía</p>
            </div>
          </div>
        </div>
      );
      
}