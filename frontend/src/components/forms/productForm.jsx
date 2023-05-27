import { Button, Form } from "react-bootstrap";
import { Input } from "./Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFileProduct } from "../../store/slices/FIleProductSlice";
import { createProduct } from "../../store/slices/ProductSlice";



export const ProductForms = ({ sellerId }) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        categoryId: '',
        imageId: '',
    });


    const [imageData, setImageData] = useState({
        attached: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const file = (await dispatch(createFileProduct(imageData))).payload;
        dispatch(createProduct({ ...formData, imageId: file.id, sellerId }));
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleChangeImage = (event) => {
        setImageData({ ...imageData, [event.target.name]: event.target.value });
    }

    return (
        <>

            <Form className="form-control py-3" onSubmit={handleSubmit} >

                <Input
                    key="formData.name"
                    label="Nombre de producto"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                >
                </Input>

                <Input
                    key="formData.description"
                    label="Descripción"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                >
                </Input>
                <Input
                    key="formData.price"
                    label="Precio"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}>

                </Input>
                <Input
                    key="formData.stock"
                    label="Stock"
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}>
                </Input>
                <Input
                    key="formData.categoryId"
                    label="Categoría de Producto"
                    type="text"
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleChange}>
                </Input>
                <Input
                    key="imageData.attached"
                    label="url de la imagen de Producto"
                    type="url"
                    name="attached"
                    value={imageData.attached}
                    onChange={handleChangeImage}>
                </Input>
                <Input
                    key="imageData.description"
                    label="Descripción de la imagen"
                    type="text"
                    name="description"
                    value={imageData.description}
                    onChange={handleChangeImage}>
                </Input>


                <Button variant="primary" type="submit" className="btn-icon">
                    <i class="bi bi-save "></i>
                </Button>

            </Form>




        </>
    )
};