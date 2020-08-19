import React from 'react';
import Producto  from './components/producto.js'
import { BrowserRouter } from 'react-router-dom'
import Head from './components/Head.js'
import NavBar from './components/NavBar.js'
import Catalogo from "./components/Catalogo.js"
import { Route } from "react-router-dom"
import Result from "./containers/result.js"
import Slider from "./components/slider"


function App() {
  return (
    <BrowserRouter>
      <Head />
      

      <Route
        exact path='/result/:id'  
        render={({match}) => <Result props={match.params.id} />}
      />
      <Route
         path="/" component={NavBar}/>
         
      <Route
        exact path='/products/:id'  
        render={({match}) => <Producto props={match.params.id} />}
      />
      <Slider />
      <Route exact path="/products" component={Catalogo}/>
    </BrowserRouter>
  );
}

export default App;


