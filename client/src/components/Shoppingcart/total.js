import '../Shoppingcart/carrito.css'
import React from 'react';
import * as actionCreators from "../Redux/Actions/index.js"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Total extends React.Component {
  render() {
    return (
        <div class="totalbox">
            <h5 class="titulost">Productos:</h5>
            {this.props.carrito.map(v=> 
               <p class="precioprod">{v.price} $</p> )}
            <h2 class="titulost">TOTAL:</h2>
               <p class="precioprod">{ 
               this.props.carrito.name} $</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Total);

