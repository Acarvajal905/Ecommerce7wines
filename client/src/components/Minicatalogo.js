import React from 'react';
import ProductCard from "./productcard";
import "../Styles/Cards.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../components/Redux/Actions/index.js"

class Minicat extends React.Component {

    componentDidMount(){
      this.props.get5Product()
    }
    render() {if (!this.props.fiveproducts[0]){
      return(<h1>Productos no encontrados</h1>)
    }else
        return (
          

            <div class="boxminicat">
                {this.props.fiveproducts.map(v =>

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
      fiveproducts: state.fiveproducts,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Minicat);
  