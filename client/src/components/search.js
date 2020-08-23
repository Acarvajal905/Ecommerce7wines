import "../Styles/producto.css";
import React from 'react';
import * as actionCreators from "../components/Redux/Actions/index.js"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductCard from "./productcard.js"


class ResultSearch extends React.Component {

  componentDidMount(){
    const { match: {params: { id }}} = this.props
    this.props.SearchProduct(id)
  }

    render() {

      if (this.props.searchproduct.length === 0){
        return(<h1>Producto no encontrado</h1>)
      }else 
        return (
            <div class="box5">
            {this.props.searchproduct.map(v =>
                <ProductCard
                    name={v.name}
                    id={v.id}
                    description={v.description}
                    price={v.price}
                    stock={v.stock}
                    image={v.image}
                    quantity={v.quantity}
                    content={v.content}
                    percentage={v.percentage}
                    country={v.country}
                    colour={v.colour}
                />
            )
            }
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    searchproduct: state.searchproduct,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultSearch);


