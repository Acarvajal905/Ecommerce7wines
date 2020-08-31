import '../Shoppingcart/carrito.css'
import React from 'react';
import * as actionCreators from "../Redux/Actions/index.js"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'


class Carrito extends React.Component {
  render() {
    return (
      <div class="boxcart"> 
        {this.props.carrito.map(v =>

          <div class="boxorder">
            <Link to={`/products/${v.id}`} >
              <img class="imagencart" src={v.image} ></img>
            </Link>
            <Link to={`/products/${v.id}`} >  
              <h3 class="tituloprod">{v.name}</h3>
            </Link>

            <span class="precioprod">{v.price} $</span> 

            <form class="btn-group" role="group" aria-label="Basic example">
            </form>

          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    carrito: state.carrito
   
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);

