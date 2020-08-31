import React from 'react';
import UserCard from "./UsersCard.js";
import "../../Styles/Cards.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../components/Redux/Actions/index.js"


class UsersCard extends React.Component {

    componentDidMount() {
        this.props.getAllUser()
    }
    render() {
        return (

            <div class="box5">
                {this.props.allusers.map(v =>

                    <UserCard
                        name={v.name}
                        email={v.id}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersCard);
