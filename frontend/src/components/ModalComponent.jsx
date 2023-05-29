import { Navigate} from "react-router-dom";
import { Button, Modal, Row } from "react-bootstrap";

export const ModalComponent = ( { title, message}) => {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header  >
                    <Modal.Title className="h2">{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-center">
                    <Button className="icon-create " variant="secondary" href="/">Ir a la tienda</Button>
                    <Button className="icon-create " variant="primary" href="/profile/my-area">Ir a mi area de usuario</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
};