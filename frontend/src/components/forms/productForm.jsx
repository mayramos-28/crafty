import { Form } from "react-bootstrap";
import { Input } from "./Input";
import { createProduct } from "../../api/productsApi";
import { useState } from "react";
import { useDispatch } from "react-redux";



export const ProductForms = (seller) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        categoryId: '',
        sellerId: seller,
        imageId: '',
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(formData));
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className="container-fluid d-flex justify-content-center h-100 flex-grow-1">
                <div className="form-center-container">
                    <Form name="form" onSubmit={handleSubmit} className="form-display">
                        <Form.Label>Producto</Form.Label>
                        <Input
                            key="name"
                            label="Nombre de producto"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        >
                        </Input>
                        <Input
                            key="description"
                            label="Descripción"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        >
                        </Input>
                        <Input
                            key="price"
                            label="Precio"
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}>

                        </Input>
                        <Input
                            key="stock"
                            label="Stock"
                            type="number"
                            name="Stock"
                            value={formData.stock}
                            onChange={handleChange}>
                        </Input>
                        <Input
                            key="categoryId"
                            label="Categoría de Producto"
                            type="text"
                            name="categoryId"
                            value={formData.categoryId}
                            onChange={handleChange}>
                        </Input>
                        <Input
                            key="imagen"
                            label="Imagen de Producto"
                            type="image"
                            name="imagen"
                            value={formData.categoryId}
                            onChange={handleChange}>
                        </Input>


                        <Form.Control type={props.type} name={props.name} value={props.value} onChange={props.onChange} className={'form-control' + (props.error ? ' is-invalid' : '')} />

                    </Form>
                </div>
            </div>


        </>
    )
};