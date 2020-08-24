import React from 'react';
import ProductCard from "./productcard";
import "../Styles/Cards.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../components/Redux/Actions/index.js"

/* array=[1,2,3,4,5,6,7,8,9,0,11,12,13];
product=[]

while(product.length < 5) {
  j=Math.floor(Math.random() * array.length)
  product.push(array[j])
}*/

class Minicat extends React.Component {

    componentDidMount(){
      this.props.getAllProduct()
    }
    render() {
        return (

            <div class="boxminicat">
                {this.props.allproducts.map(v =>

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
        allproducts: state.allproducts,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Minicat);
  