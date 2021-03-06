import React from 'react';
import axios from "axios";
import "../../Styles/CRUD.css"

export function handleSumit2(e) {
  e.preventDefault();

  const x = e.target

  
  //producto creado por el formulario
  let Creado = {
    name: x.name.value,
    description: x.description.value,
    price: x.price.value,
    stock: x.stock.value,
    image: x.imagen.value,
    content: x.content.value,
    percentage: x.percentage.value,
    country: x.country.value,
    colour: x.colour.value,
    categories: x.categories.value
  };

  for (var prop in Creado) {
    if (!Creado[prop]) {
      return alert(`${prop} es requerido`)
    }
  }
 

  //Me traigo los productos de la bd

  axios.get(`http://localhost:3001/products/`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})

  .then(ress =>{ 
   let arr = ress.data.filter(p => p.name === Creado.name)
    if(arr.length){
    alert( `El producto  ya existe`);
    }
    if(!arr.length){     /* Aca va la funcion para editar la bd, creando producto */
      axios.post(`http://localhost:3001/products/`, Creado ,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
      .then(ress1 => {
        alert( `El producto fue Creado`)
      })
      .catch(err => {
        console.log(err)
        alert(`Hubo un problema al crear`);
       })

    }
 })
 
  .catch(error2 => {
   console.log(error2)
   alert(`Hubo un problema al crear`);
  })
};
// Valido el input
export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Name is required';
  } else if (!/\S/.test(input.name)) {
    errors.name = 'Name is invalid';
  } if (!input.category) {
    errors.category = 'Category is required';
  } if (!input.description) {
    errors.description = 'Description is required';
  } else if (!/\S/.test(input.description)) {
    errors.description = 'Description is invalid';
  } if (!input.price) {
    errors.price = 'Price is required';
  } else if (!/[0-9]/.test(input.price)) {
    errors.price = 'Price is invalid';
  } if (!input.stock) {
    errors.stock = 'Stock is required';
  } else if (!/[0-9]/.test(input.stock)) {
    errors.stock = 'Stock is invalid';
  } if (!input.imagen) {
    errors.imagen = 'Imagen is required';
  } else if (!/\S/.test(input.imagen)) {
    errors.imagen = 'Imagen is invalid';
  } if (!input.quantity) {
    errors.quantity = 'Quantity is required';
  } else if (!/[0-9]/.test(input.quantity)) {
    errors.quantity = 'Quantity is invalid';
  } if (!input.content) {
    errors.content = 'Content is required';
  } else if (!/[0-9]/.test(input.content)) {
    errors.content = 'Content is invalid';
  } if (!input.percentage) {
    errors.percentage = 'Percentage is required';
  } else if (!/[0-9]/.test(input.percentage)) {  //agustar exprecion
    errors.percentage = 'Percentage is invalid';
  } if (!input.country) {
    errors.country = 'Country is required';
  } else if (!/\S/.test(input.country)) {
    errors.country = 'Country is invalid';
  } if (!input.colour) {
    errors.colour = 'Colour is required';
  } else if (!/\S/.test(input.colour)) {
    errors.colour = 'Colour is invalid';
  } if (!input.url) {
    errors.url = 'Url is required';
  } else if (!/\S/.test(input.url)) {
    errors.url = 'Url is invalid';
  }
  return errors;
};


export default function CreateProduct() {

  //asigno estados

  const [input, setInput] = React.useState({
    name: '',
    description: "",
    category: "",
    price: "",
    stock: "",
    imagen: "",
    quantity: "",
    content: "",
    percentage: "",
    country:"",
    colour:"",
    url:"",
  });
  const [errors, setErrors] = React.useState({});

  const [categorias, setCategorias] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/category`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
    .then(result => {
      let categories = result.data
      setCategorias(categories);
    })
    .catch(error =>{ console.log(error)})
  }, [])
  
  const handleInputChange = function(e){

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return ( 

    <div class="adminbox">
      <form onSubmit={handleSumit2} id="formulario">
        <div> <h1>Crear Producto</h1> </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <input className={`${errors.name && 'danger'}`} onChange={handleInputChange} value={input.name}
              type='text' placeholder='Nombre del producto' name="name">
            </input>
            {errors.name && (<p className="danger">{errors.name}</p>)}
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------ */}
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Categoria:</label>
          <div class="col-sm-10">

          <select name ="categories">
            {categorias.map(v =>
              <option name ="categories" value={v.id}>{v.name}</option>)
            }
          </select>

          {errors.percentage && (<p className="danger">{errors.category}</p>)}

          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------- */}
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Descripcion:</label>
          <div class="col-sm-10">
            <textarea className={`${errors.description && 'danger'}`} onChange={handleInputChange} value={input.description}
              type='text' placeholder='Description' name="description">
            </textarea>
            {errors.description && (<p className="danger">{errors.description}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Precio:</label>
          <div class="col-sm-10">
            <input className={`${errors.price && 'danger'}`} onChange={handleInputChange} value={input.price}
              type='text' placeholder='Precio' name="price">
            </input>
            {errors.price && (<p className="danger">{errors.price}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Stock:</label>
          <div class="col-sm-10">
            <input className={`${errors.stock && 'danger'}`} onChange={handleInputChange} value={input.stock}
              type='text' placeholder='Stock' name="stock">
            </input>
            {errors.stock && (<p className="danger">{errors.stock}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Imagen:</label>
          <div class="col-sm-10">
            <input className={`${errors.imagen && 'danger'}`} onChange={handleInputChange} value={input.imagen}
              type='text' placeholder='Insertar url Imagen' name="imagen">
            </input>
            {errors.imagen && (<p className="danger">{errors.imagen}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Contenido:</label>
          <div class="col-sm-10">
            <input className={`${errors.content && 'danger'}`} onChange={handleInputChange} value={input.content}
              type='text' placeholder='Contenido' name="content">
            </input>
            {errors.content && (<p className="danger">{errors.content}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Grado Alcoholico:</label>
          <div class="col-sm-10">
            <input className={`${errors.percentage && 'danger'}`} onChange={handleInputChange} value={input.percentage}
              type='text' placeholder='Porcentaje de Alcohol' name="percentage">
            </input>
            {errors.percentage && (<p className="danger">{errors.percentage}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Pais:</label>
          <div class="col-sm-10">
            <input className={`${errors.country && 'danger'}`} onChange={handleInputChange} value={input.country}
              type='text' placeholder='Pais de origen' name="country">
            </input>
            {errors.country && (<p className="danger">{errors.country}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Color:</label>
          <div class="col-sm-10">
            <input className={`${errors.colour && 'danger'}`} onChange={handleInputChange} value={input.colour}
              type='text' placeholder='Color' name="colour">
            </input>
            {errors.colour && (<p className="danger">{errors.colour}</p>)}
          </div>
        </div>

        <input class="btn btn-danger" type="submit" value="CREAR PRODUCTO" />

      </form>
    </div>
  )
};