import React from 'react';
import UsersCard from "./UsersCard";
import "../../Styles/Users.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../Redux/Actions/index.js"
import NavBarUser from "./NavBarUsuarios.js"

class Clientes extends React.Component {

    componentDidMount() {
        this.props.getAllClients()
    }
    render() {
        return (
            <div>
                <NavBarUser/>
                <div class="userbox">
                {this.props.clients.map(v =>

                    <UsersCard
                        name={v.name}
                        email={v.email}
                        id={v.id}
                        isAdmin={v.isAdmin.toString()}
                    />
                )}
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        clients: state.clients,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Clientes);
