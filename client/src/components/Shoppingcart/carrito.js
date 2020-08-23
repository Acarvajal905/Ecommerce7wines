import '../Shoppingcart/carrito.css'
import React from 'react';
import * as actionCreators from "../Redux/Actions/index.js"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'


class Carrito extends React.Component {

    render() {
        return (
            <div class="box5"> 
            {this.props.carrito.map(v =>

             <div class="box3">
             <Link to={`/products/${v.id}`} >  
               <h3 class="tituloprod">{v.name}</h3>
             </Link>
             <Link to={`/products/${v.id}`} >
               <img class="imagenF" src={v.image} ></img>
             </Link>
             <span class="precioprod">{v.price} $</span> 

             <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">-</button>
                <button type="button" class="btn btn-secondary">0</button>
                <button type="button" class="btn btn-secondary">+</button>
            </div>
           </div>

            )
            }
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

