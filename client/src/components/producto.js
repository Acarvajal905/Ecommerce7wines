import "../Styles/producto.css";
import React from 'react';
import * as actionCreators from "../components/Redux/Actions/index.js"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Producto extends React.Component {

  componentDidMount(){
    const { match: {params: { id }}} = this.props
    this.props.getProduct(id)
  }

    render() {
        return (
          <div > 
        <div class="box1">
          <div class="box2">
          <img class="image" src={this.props.product.image} ></img>
            <div class="boxD">
              <h1 class="tittle" > {this.props.product.name}</h1>

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


