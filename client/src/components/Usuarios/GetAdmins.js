import React from 'react';
import UsersCard from "./UsersCard";
import "../../Styles/Users.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../Redux/Actions/index.js"
import NavBarUser from "./NavBarUsuarios.js"

class Admins extends React.Component {

    componentDidMount() {
        this.props.getAllAdmins()
    }
    render() {
        return (
            <div>
                <NavBarUser/>
                <div class="userbox">
                {this.props.admins.map(v =>

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
        admins: state.admins,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admins);
