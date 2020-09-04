import React from 'react';
import axios from 'axios'
import "../../Styles/CRUD.css"

  // Valido el input
  export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } else if (!/\S/.test(input.name)) {
      errors.name = 'Name is invalid';
    }if (!/\S/.test(input.description)) {
      errors.description = 'Description is invalid';
    } if (!/[0-9]/.test(input.price)) {
      errors.price = 'Price is invalid';
    }if (!/[0-9]/.test(input.stock)) {
      errors.stock = 'Stock is invalid';
    }if (!/[0-9]/.test(input.agregarcategories)) {
      errors.agregarcategories = 'Categories is invalid';
    }if (!/\S/.test(input.imagen)) {
      errors.imagen = 'Imagen is invalid';
    }if (!/[0-9]/.test(input.content)) {
      errors.content = 'Content is invalid';
    }if (!/[0-9]/.test(input.percentage)) {  //agustar exprecion
      errors.percentage = 'Percentage is invalid';
    }if (!/\S/.test(input.country)) {
      errors.country = 'Country is invalid';
    }if (!/\S/.test(input.colour)) {
      errors.colour = 'Colour is invalid';
    }if (!/\S/.test(input.url)) {
      errors.url = 'Url is invalid';
    }
    return errors;
  };


export const GetProducto = async (Prod) =>{  
  try{
    const resProd = await axios (`https://jsonplaceholder.typicode.com/posts/`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
    let Buscado= resProd.data.filter(p => p.id == Prod) //para probar busca que el id coinsida
    console.log("me traje ", Buscado)                   //modificar cuando este listo
      return Buscado
   } catch(error){
      console.log(error);
     }
 }

//Funcion que se ejecuta en el Sumit
export const handleSumit3 = function(e) {
  e.preventDefault();

  const x = e.target;

  let prod= {
    description: x.description.value, 
    stock: x.stock.value, 
    categories: x.agregarcategories.value,
    quitarcategories: x.quitarcategories.value,
   /*  imagen: x.imagen.value,  */
    content: x.content.value, 
    percentage: x.percentage.value, 
    country: x.country.value, 
    colour : x.colour.value
  }

/* ejecuto la funcion de bd */

GetProducto(x.name.value)

/* Empiezo a reemplazar valores */

.then(function(Buscado){
  let Actualizado = Buscado[0];
  
  //agrega una categoria al arreglo de categorias
   
  if(prod.categories){
    let i = Actualizado.categories;
    i[i.length]=prod.categories

  }  //quita una categoria//
  if(prod.quitarcategories){
    let f = Actualizado.categories.indexOf(prod.quitarcategories)
    if(f!== -1){
      Actualizado.categories.splice( f, 1 );
    }  
  
  } //modifica content
  if(prod.content){
    Actualizado.content = prod.content;
  
  } //modifica percenage
  if(prod.percentage){
    Actualizado.percentage = prod.percentage;
  
  } //modifica country
  if(prod.country){
    Actualizado.country = prod.country;
  
  } //modifica colour
  if(prod.colour){
    Actualizado.colour = prod.country;
   
  } // No se que hacer con la imagen

   /* if(prod.imagen){
   Actualizado.imagen = prod.imagen;
  
  } */  //modifica description
  if(prod.description){
    Actualizado.description = prod.description;
  
  } //modifica stock
  if (prod.stock){
    Actualizado.stock = prod.stock;
  
  }
  console.log("retorno el producto actualizado")
  console.log(Actualizado)
  return Actualizado
  
})
//envia el produco modificado con un put
.then( Actualizado => 
  axios.put(`https://jsonplaceholder.typicode.com/posts/${Actualizado.id}`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}},
  { 
    //Actualizar el artchivo que envia para nuesra bd
    Actualizado
  }) 
  )
.then(response => {
  console.log("entre a ok")
  console.log(response)
})
.catch (error2 => {
  console.log(error2);
}) 
};

export default function Update() {


  const [input, setInput] = React.useState({
    name: '',
    description: "",
    price: "",
    stock: "",
    agregarcategories:"",
    imagen: "",
    quantity: "",
    content:"",
    percentage: "",
    country:"",
    colour:"",
    url:""
  });
  const [errors, setErrors] = React.useState({});

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
      <form  onSubmit={handleSumit3} id="formulario">
        <div> <h1>Actualizar un Producto</h1> </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <input className={`${errors.name && 'danger'}`} onChange={handleInputChange} value={input.name}
              type= 'text' placeholder = 'Nombre del producto' name ="name">
            </input>
            {errors.name && (<p className="danger">{errors.name}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Descripcion:</label>
          <div class="col-sm-10">
            <textarea className={`${errors.description && 'danger'}`} onChange={handleInputChange} value={input.description}
              type= 'text' placeholder = 'Description' name ="description">
            </textarea>
            {errors.description && (<p className="danger">{errors.description}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Precio:</label>
          <div class="col-sm-10">
            <input className={`${errors.price && 'danger'}`} onChange={handleInputChange} value={input.price}
              type= 'text' placeholder = 'Precio' name ="price">
            </input>
            {errors.price && (<p className="danger">{errors.price}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Stock:</label>
          <div class="col-sm-10">
            <input className={`${errors.stock && 'danger'}`} onChange={handleInputChange} value={input.stock}
              type= 'text' placeholder = 'Stock' name ="stock">
            </input>
            {errors.stock && (<p className="danger">{errors.stock}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Agregar Categoria:</label>
          <div class="col-sm-10">
            <input className={`${errors.agregarcategories && 'danger'}`} onChange={handleInputChange} value={input.agregarcategories}
              type= 'text' placeholder = 'agregar categories' name ="agregarcategories">
            </input>
            {errors.agregarcategories && (<p className="danger">{errors.agregarcategories}</p>)}
          </div>
        </div>

         <div class="form-group row">
           <label class="col-sm-2 col-form-label">Quitar Categoria:</label>
           <div class="col-sm-10">
               <input type= 'text' class="form-control" placeholder = 'quitar categories' name="quitarcategories"></input>
           </div>
          </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Imagen:</label>
          <div class="col-sm-10">
            <input className={`${errors.imagen && 'danger'}`} onChange={handleInputChange} value={input.imagen}
              type= 'text' placeholder = 'Insertar url Imagen' name ="imagen">
            </input>
            {errors.imagen && (<p className="danger">{errors.imagen}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Cantidad:</label>
          <div class="col-sm-10">
            <input className={`${errors.quantity && 'danger'}`} onChange={handleInputChange} value={input.quantity}
              type= 'text' placeholder = 'Cantidad' name ="quantity">
            </input>
            {errors.quantity && (<p className="danger">{errors.quantity}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Contenido:</label>
          <div class="col-sm-10">
            <input className={`${errors.content && 'danger'}`} onChange={handleInputChange} value={input.content}
              type= 'text' placeholder = 'Contenido' name ="content">
            </input>
            {errors.content && (<p className="danger">{errors.content}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Grado Alcoholico:</label>
          <div class="col-sm-10">
            <input className={`${errors.percentage && 'danger'}`} onChange={handleInputChange} value={input.percentage}
              type= 'text' placeholder = 'Porcentaje de Alcohol' name ="percentage">
            </input>
            {errors.percentage && (<p className="danger">{errors.percentage}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Pais:</label>
          <div class="col-sm-10">
            <input className={`${errors.country && 'danger'}`} onChange={handleInputChange} value={input.country}
              type= 'text' placeholder = 'Pais de origen' name ="country">
            </input>
            {errors.country && (<p className="danger">{errors.country}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Color:</label>
          <div class="col-sm-10">
            <input className={`${errors.colour && 'danger'}`} onChange={handleInputChange} value={input.colour}
              type= 'text' placeholder = 'Color' name ="colour">
            </input>
            {errors.colour && (<p className="danger">{errors.colour}</p>)}
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Url:</label>
          <div class="col-sm-10">
            <input className={`${errors.url && 'danger'}`} onChange={handleInputChange} value={input.url}
              type= 'text' placeholder = 'url' name ="url">
            </input>
            {errors.url && (<p className="danger">{errors.url}</p>)}
          </div>
        </div>

        <input class="btn btn-danger" type="submit" value="Actualizar" />

      </form>
    </div>
  )
};
