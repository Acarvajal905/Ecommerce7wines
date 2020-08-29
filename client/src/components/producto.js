import "../Styles/producto.css";
import React from 'react';
import * as actionCreators from "../components/Redux/Actions/index.js"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import Minicat from "./Minicatalogo.js"
import { AddToCars } from './Redux/Actions/index.js';

class Producto extends React.Component {

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.getProduct(id);
  }

  render() {
    return (
      <div >
        <div class="box1">
          <div class="box2">
            <div class="boximg">
              <img class="image" src={this.props.product.image} ></img>
              {/* <Link to={`/carrito`} >               //COMENTADO LO DE AGREGAR AL CARRITO EN EL PRODUCTCARD
                <button type="button" class="btn btn-danger btn-sm"  
                  onClick={() => { AddToCars(this.props.product.id); }}>Agregar al carrito</button>
              </Link> */}
            </div>

            <div class="boxD">
              <h1 class="title" > {this.props.product.name}</h1>

             {/*  <span class="categories">{this.props.product.categories}</span> */}
              <span class="price">{this.props.product.price} $</span>

              <ul class="list">
                <li>Stock:   {this.props.product.stock}</li>
                <li>Grado Alcoholico:   {this.props.product.percentage} %</li>
                <li>Pais:   {this.props.product.country}</li>
                <li>{this.props.product.content} ml/cc</li>
                <li>Color:   {this.props.product.colour}</li>
                <p class="description">{this.props.product.description}</p>
              </ul>
            </div>
          </div>
        </div>
        <div class="title2">
          <h1>MAS VINOS DE NUESTRO CATALOGO</h1>
        </div>
        <Minicat />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Producto);


