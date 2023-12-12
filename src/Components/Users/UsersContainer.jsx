import React from "react";
import Users from "./Users";
import { compose } from "redux";
import { connect } from "react-redux";
import { setUsers } from "../redux/users-reducer"
import { usersAPI } from "../API/Api";
import axios from "axios";

class UsersContainer extends React.Component{
    componentDidMount(){
        // usersAPI.getUsers()
        //     .then(response => {
        //         this.props.setUsers(response.data.items);
        //     })
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
        .then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render(){
        return(
            <Users 
                users={this.props.users}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default compose(
    connect(mapStateToProps, {
        setUsers
    })

)(UsersContainer) 