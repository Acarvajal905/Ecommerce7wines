import React from 'react';
import UsersCard from "./UsersCard";
// import "../../Styles/Users.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../Redux/Actions/index.js"


class Usuarios extends React.Component {

    componentDidMount() {
        this.props.getAllUser()
    }
    render() {
        return (

            <div>

                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        <h3> Lista de Usuarios</h3>
                    </a>
                </div>
                {this.props.allusers.map(v =>

                    <UsersCard

                        name={v.name}
                        email={v.email}
                        isAdmin={v.isAdmin.toString()}

                    />

                )
                }
            </div>

        );
    }

}

function mapStateToProps(state) {
    return {
        allusers: state.allusers,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
