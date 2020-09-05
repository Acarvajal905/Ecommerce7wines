import React from 'react';
import Perfilcart from "./perfil.js";
import "../../Styles/Users.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../Redux/Actions/index.js"

class Profile extends React.Component {

    componentDidMount() {
        this.props.getLoggedUser()
    }
    render() {
        return (
            <div>
                perfil
                <div class="userbox">
                {this.props.user.map(v =>

                    <Perfilcart
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
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);