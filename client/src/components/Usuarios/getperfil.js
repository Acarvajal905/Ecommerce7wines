import React from 'react';
import Perfilcart from "./perfil.js";
// import OrderUser from "./OrderUser.js";
import "../../Styles/Users.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../Redux/Actions/index.js"

class Profile extends React.Component {

    componentDidMount() {
        this.props.getLoggedUser(localStorage.getItem('userId'))
    }
    render() {
        return (
            <div>
                <div class="userbox">
                    <Perfilcart
                        name={this.props.user.name}
                        email={this.props.user.email}
                        id={this.props.user.id}
                        isAdmin={this.props.user.isAdmin == true && "true" || "false"}
                    />
                    {/* <OrderUser/> */}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
