import '../Shoppingcart/carrito.css'
import React from 'react';
import * as actionCreators from "../Redux/Actions/index.js"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

class Prodcart extends React.Component {
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

            <nav aria-label="...">
                <ul class="pagination pagination-sm">
                    <li class="page-item active"><a class="page-link" href="#">-</a></li>
                    <li class="page-item"><a class="page-link" href="#">0</a></li>
                    <li class="page-item active"><a class="page-link" href="#">+</a></li>
                </ul>
            </nav>

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

export default connect(mapStateToProps, mapDispatchToProps)(Prodcart);