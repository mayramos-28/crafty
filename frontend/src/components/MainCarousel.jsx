import { Carousel } from "react-bootstrap";
import FirsetImage from "./../assets/image/carousel/modelado-alta-vista-arcilla-torno-alfarero.jpg";
import SecondImage from "./../assets/image/carousel/dibujo-habilidades-bricolaje-hecho-mano-artesanal.jpg";
import ThirdImage from "./../assets/image/carousel/cerca-diseno-dibujo-zapatero-masculino.jpg";

export const MainCarousel = () => {
return(
    <>
    <Carousel>

        <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={FirsetImage}
          alt="modelado-alta-vista-arcilla-torno-alfarero"
        />
        <Carousel.Caption>
          <h3>Alfarería</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>

        </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={SecondImage}
          alt="Second slide"
        />
        <Carousel.Caption >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={ThirdImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

        
    </Carousel>

        </>
)
}