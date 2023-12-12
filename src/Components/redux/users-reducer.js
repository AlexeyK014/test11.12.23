import { usersAPI } from "../API/Api";

const SET_USERS = "SET_USERS";


const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export default usersReducer;

export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}

// export const getUsers = () => {
//     return async(dispatch) => {
//         let data = await usersAPI.getUsers();
//             dispatch(setUsers(data.items))
        
//     }
// }