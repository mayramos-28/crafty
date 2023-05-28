
import { Button, Col, Form, Row } from "react-bootstrap";
import { Input } from "../forms/Input";
import { Formik } from 'formik';
import { craftyFileUrl } from "../../api/FileApi";
import { fetchCategories, selectAllCategories } from "../../store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";


export const ProductFormComponent = ({ product, onSubmit, onDelete }) => {
    const dispatch = useDispatch();

    const categories = useSelector(selectAllCategories);
    const firstExecution = useRef(true);

    useEffect(() => {
        if (firstExecution.current) {
            const init = async () => dispatch(fetchCategories());
            const isFirst = firstExecution;
            firstExecution.current = false;
            isFirst && init();
        }

    }, [dispatch, firstExecution]);
    return (
        <Formik
            key={product.id}
            initialValues={{ ...product, imageUrl: craftyFileUrl(product.imageId) }}
            onSubmit={onSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (

                <Row className="d-flex justify-content-center py-2 my-2 w-100">

                    <Col sm={12} md={12} lg={12}>
                        <Form className="form-control" onSubmit={handleSubmit}>
                            <Input
                                name="name"
                                label="Nombre del producto: "
                                type="text"
                                placeholder="Nombre del producto"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <div class="container">
                                <div class="comment">
                                    <label for="">Descripción del producto:</label><br />
                                    <textarea class="textinput" placeholder="Comment" name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} ></textarea>
                                </div>
                            </div>


                            <Input
                                name="price"
                                label="Precio del producto: "
                                type="number"
                                placeholder="Precio del producto"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Input

                                name="stock"
                                type="number"
                                label="Cantidad de productos disponibles: "
                                placeholder="Cantidad de productos"
                                value={values.stock}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Input
                                name="imageUrl"
                                type="text"
                                label="url de la imagen del producto: "
                                placeholder="Imagen del producto"
                                value={values.imageUrl}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label htmlFor="">Categoria:</label>
                            <Form.Select value={values.categoryId} onChange={handleChange}
                                onBlur={handleBlur}>

                                {categories.map((category) => (
                                    <option value={category.id}>
                                        {category.name} ({category.id})
                                    </option>
                                ))}

                            </Form.Select>


                            <Row className="d-flex justify-content-center gap-2 py-2">
                                <Col sm={11} md={6} lg={4} className="text-center">
                                    <Button variant="primary" type="submit" className="btn-icon">
                                        <i className="bi bi-save"></i>
                                    </Button>
                                </Col>
                                {onDelete && (<Col sm={11} md={6} lg={4} className="text-center">
                                    <Button variant="primary" type="submit" onClick={onDelete} className="bg-danger ">
                                        <i class="bi bi-trash"></i>
                                    </Button></Col>)}

                            </Row>


                        </Form>
                    </Col>
                </Row>
            )}
        </Formik>

    );
}