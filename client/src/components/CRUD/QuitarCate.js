import React from 'react';
import axios from "axios";
import "../../Styles/CRUD.css"

export function handleCate(e){
    e.preventDefault();
    let productos = e.target.productos.value
    let categoria = e.target.categories.value
  
    axios.delete(`http://localhost:3001/products/${productos}/category/${categoria}`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
    .then(ress =>{
      console.log(ress)
      alert("categoria quitada")
    })
  }
  

export default function QuitarCategoria() {

    const [categorias, setCategorias] = React.useState([]);

    React.useEffect(() => {
      axios.get(`http://localhost:3001/category`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
      .then(result => {
        let categories = result.data
        setCategorias(categories);
      })
      .catch(error =>{ console.log(error)})
    }, [])

    const [productos, setProductos] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://localhost:3001/products`,{headers: { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then(result => {
          let product = result.data
          setProductos(product);
        })
        .catch(error =>{ console.log(error)})
    }, [])



    return (
        <div class="adminbox">
            <div> <h1>Agregar Categoria</h1> </div>
         <form onSubmit={handleCate} >
          <div class="form-group row">
           <label class="col-sm-2 col-form-label">Productos:</label>
           <div class="col-sm-10">

           < select name ="productos">
            {productos.map(j =>
              <option name ="productos" value={j.id}>{j.name}</option>)
            }
           </select>
           </div>
          </div>
          <div class="form-group row">
           <label class="col-sm-2 col-form-label">Categoria:</label>
           <div class="col-sm-10">

           < select name ="categories">
            {categorias.map(v =>
              <option name ="categories" value={v.id}>{v.name}</option>)
            }
           </select>
           </div>
          </div>
            <input class="btn btn-danger" type='submit' value='Quitar Categoria' />
          </form>
        </div>
    )
}