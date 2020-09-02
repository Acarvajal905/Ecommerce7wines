import React, { useState, useEffect } from 'react';
import { updateProduct, getAllCategory, getAllProduct } from '../Redux/Actions/index.js';
import { useSelector, useDispatch } from "react-redux";

const Update = () => {

    const [search, setSearch] = useState('');

    const [errors, setErrors] = useState('');

    const [product] = useState("")

    const [input, setInputs] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        content: "",
        percentage: "",
        country: "",
        colour: "",

    });

    const allproducts = useSelector(state => state.allproducts)
    const dispatch = useDispatch()





    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllProduct())
    }, [getAllProduct, getAllCategory])

    function updateP(e, input, product) {
        e.preventDefault();
        dispatch(updateProduct(input, product));

        setInputs({
            name: "",
            description: "",
            price: "",
            stock: "",
            image: "",
            content: "",
            percentage: "",
            country: "",
            colour: "",

        });
    }


    const handleInputChange = function (e) {
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );

        setInputs({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const filteredProducts = allproducts.filter(product => {
        return product.name.includes(search)
    })



    return (
        <form className="m-5" onSubmit={(e) => updateP(e, input, product)}>
            <div className="container text-center  d-flex justify-content-center align-items-center">

                <input className="form-control form-row w-25 " type="text" placeholder="Filtrar selección" onChange={(e) => setSearch(e.target.value)} />

                <select
                    className="btn btn-light dropdown-toggle m-3"

                    name="product"

                >
                    <option value="" selected="true" disabled="disabled"> BUSCAR ↓ </option>

                    {filteredProducts && filteredProducts.map(b => {
                        return <option > {b.name} </option>
                    })
                    }
                </select>
                {errors.product && <p>{errors.product}</p>}
            </div>
            <div className="form-row m-3">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <p >{errors.name}</p>}
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Descripcion"
                        name="description"
                        value={input.description}
                        onChange={handleInputChange}
                    />
                    {errors.description && <p >{errors.description}</p>}
                </div>
            </div>
            <div className="form-row m-3">

                <div className="form-group col-md-3">
                    <input
                        placeholder="Precio"
                        name="price"
                        value={input.price}
                        onChange={handleInputChange}
                    />
                    {errors.price && <p >{errors.price}</p>}
                </div>
                <div className="form-group col-md-3">
                    <input
                        className="form-control"
                        placeholder="Stock"
                        name="stock"
                        value={input.stock}
                        onChange={handleInputChange}
                    />
                    {errors.stock && <p >{errors.stock}</p>}
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Imagen"
                        name="image"
                        value={input.image}
                        onChange={handleInputChange}
                    />
                    {errors.image && <p >{errors.image}</p>}
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Contenido"
                        name="content"
                        value={input.content}
                        onChange={handleInputChange}
                    />
                    {errors.content && <p >{errors.content}</p>}
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Porcentaje"
                        name="percentage"
                        value={input.percentage}
                        onChange={handleInputChange}
                    />
                    {errors.percentage && <p >{errors.percentage}</p>}
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pais"
                        name="country"
                        value={input.country}
                        onChange={handleInputChange}
                    />
                    {errors.country && <p >{errors.country}</p>}
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Color"
                        name="colour"
                        value={input.colour}
                        onChange={handleInputChange}
                    />
                    {errors.colour && <p >{errors.colour}</p>}
                </div>

            </div>

            {/* <div className="container text-center  d-flex justify-content-center align-items-center">
                <select
                    className="btn btn-light dropdown-toggle m-3"
                    name="categories"
                    value={input.categories}
                    onChange={handleInputChange}
                >
                    <option value="" selected="true" disabled="disabled">
                        {" "}
            AGREGAR CATEGORIA{" "}
                    </option>
                    {allcategories &&
                        allcategories.map((s) => {
                            return <option key={s.name}> {s.name} </option>;
                        })} */}
            {/* </select>
                { errors.categories && <p >{errors.categories}</p> } */}
            <input
                type="submit"

                className="btn btn-danger"
                value="MODIFICAR PRODUCTO"
            />
            {/* </div> */}
        </form >
    );
};

export function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Nombre es un campo obligatorio';
    } else if (!input.image) {
        errors.image = 'Imagen es un campo obligatorio';
    } else if (!input.description) {
        errors.description = 'Descripción es un campo obligatorio';
    }
    else if (!input.price) {
        errors.price = 'Precio es un campo obligatorio';
    }
    else if (!/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(input.price)) {
        errors.price = 'No se permiten números negativos'
    }
    else if (!input.content) {
        errors.content = 'Contenido es un campo obligatorio';
    }
    else if (!/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(input.content)) {
        errors.content = 'No se permiten números negativos'
    }
    else if (!input.price) {
        errors.price = 'Precio es un campo obligatorio';
    }
    else if (!/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(input.price)) {
        errors.price = 'No se permiten números negativos'
    }
    else if (!input.stock) {
        errors.stock = 'Stock es un campo obligatorio';
    }
    else if (!/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(input.stock)) {
        errors.stock = 'No se permiten números negativos'
    }
    else if (!input.percentage) {
        errors.percentage = 'Porcentaje es un campo obligatorio';
    }
    else if (!input.country) {
        errors.country = 'Capacidad es un campo obligatorio';
    }
    else if (!input.colour) {
        errors.colour = 'Capacidad es un campo obligatorio';
    }
    // else if (!input.categories) {
    //     errors.categories = 'Categoria es un campo obligatorio';
    // }
    return errors;
};

export default Update;