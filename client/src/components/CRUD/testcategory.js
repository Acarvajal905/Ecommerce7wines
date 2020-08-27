
//TEST PARA REDUX DE CATEGORIAS, BORRAR AL TERMINAR DE CONECTAR

import React from 'react';
import { connect } from 'react-redux';
import ProductCard from "../productcard";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../Redux/Actions/index.js"

class Categorias extends React.Component {

    componentDidMount(){
      this.props.getAllCategory()
    }
    render() {
        return (

            <div class="box5">
                {this.props.allcategories.map(v =>

                    <ProductCard
                        id={v.id}
                        name={v.name}
                        description={v.description}
    
                    />

                )
                }
         </div>
         
        );
    }

}

function mapStateToProps(state) {
    return {
        allcategories: state.allcategories,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Categorias);
  