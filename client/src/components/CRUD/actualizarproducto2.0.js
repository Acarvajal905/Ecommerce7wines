import React, { useState, useEffect } from 'react';
import { updateProduct, getAllProduct, getProduct } from '../Redux/Actions/index.js';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

const Update = () => {

    const [search, setSearch] = useState('');



    const [product, setProduct] = useState("")

    const [input, setInput] = useState({
        id: "",
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

    function previousValues(e) {
        axios.get(`http://localhost:3001/products/${e}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })

            .then(res => {
                console.log(res)
                const c = res.data;
                setProduct(e)
                setInput({
                    id: c.id,
                    name: c.name,
                    description: c.description,
                    price: c.price,
                    stock: c.stock,
                    image: c.image,
                    content: c.content,
                    percentage: c.percentage,
                    country: c.country,
                    colour: c.colour,

                });
            })
            .catch(error => { console.log(error) })
    }



    useEffect(() => {
        dispatch(getAllProduct())
        dispatch(getProduct())
    }, [getAllProduct, getProduct])

    function updateP(e, product) {
        e.preventDefault();

        
        dispatch(updateProduct(product));

        setInput({
            id: "",
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

        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const filteredProducts = allproducts.filter(product => {
        return product.name.includes(search)
    })



    return (
        <form onSubmit={(e) => updateP(e, input, product)}>
            <div >

                <input type="text" placeholder="Filtrar selección" onChange={(e) => setSearch(e.target.value)} />

                <select name="product" onChange={(e) => previousValues(e.target.value)}>
                    <option value="" selected="true">BUSCAR ↓</option>
                    {filteredProducts && filteredProducts.map(b => {
                        return <option value={b.id} >{b.name}</option>
                    })}
                </select>

            </div>
            <div >
                <div >
                    <input
                        type="text"

                        placeholder="Id"
                        name="id"
                        value={input.id}
                        onChange={handleInputChange}
                    />

                </div>
                <div >
                    <input
                        type="text"

                        placeholder="Nombre"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                    />

                </div>
                <div >
                    <input
                        type="text"

                        placeholder="Descripcion"
                        name="description"
                        value={input.description}
                        onChange={handleInputChange}
                    />

                </div>
            </div>
            <div >

                <div >
                    <input
                        placeholder="Precio"
                        name="price"
                        value={input.price}
                        onChange={handleInputChange}
                    />

                </div>
                <div >
                    <input

                        placeholder="Stock"
                        name="stock"
                        value={input.stock}
                        onChange={handleInputChange}
                    />

                </div>
                <div>
                    <input
                        type="text"

                        placeholder="Imagen"
                        name="image"
                        value={input.image}
                        onChange={handleInputChange}
                    />

                </div>
                <div >
                    <input
                        type="text"

                        placeholder="Contenido"
                        name="content"
                        value={input.content}
                        onChange={handleInputChange}
                    />

                </div>
                <div >
                    <input
                        type="text"

                        placeholder="Porcentaje"
                        name="percentage"
                        value={input.percentage}
                        onChange={handleInputChange}
                    />

                </div>
                <div >
                    <input
                        type="text"

                        placeholder="Pais"
                        name="country"
                        value={input.country}
                        onChange={handleInputChange}
                    />

                </div>
                <div >
                    <input
                        type="text"

                        placeholder="Color"
                        name="colour"
                        value={input.colour}
                        onChange={handleInputChange}
                    />

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




export default Update;