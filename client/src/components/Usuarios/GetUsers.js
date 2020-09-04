import React from 'react';
import UsersCard from "./UsersCard";
import "../../Styles/Users.css";
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
                <div class="userbox">
                {this.props.allusers.map(v =>

                    <UsersCard
                        name={v.name}
                        email={v.email}
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
        allusers: state.allusers,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
