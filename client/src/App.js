import React from 'react';
import Producto from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home.js'
import Catalogo from "./components/Catalogo.js"
import ProdCat from "./components/VinoTinto.js"
import { Route } from "react-router-dom"
import carrito from './components/Shoppingcart/carrito.js'
import ResultSearch from "./components/search.js"
import axios from "axios";

function App() {

  const [categorias, setCategorias] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/category`)
    .then(result => {
      let categories = result.data
      setCategorias(categories);
    })
  }, [])

  return (
    <BrowserRouter>
      <Home />
      <Route exact path="/search/:id" component={ResultSearch}/>
      <Route exact path='/products/:id' component={Producto}/>
      <Route exact path="/Catalogue" component={Catalogo} />

      {categorias.map(v =>
      <Route exact path={"/Catalogue/"+v.id} component={ProdCat} />
      )}

      <Route exact path="/carrito" component={carrito} />
    </BrowserRouter>

  );
}

export default App;
 