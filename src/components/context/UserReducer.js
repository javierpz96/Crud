import { GET_USERS,UPDATE_USERS } from "./types";

const UserReducer = (state,action) =>{
    const {payload,type} = action

    switch(type){
        case UPDATE_USERS:
            return {
                ...state,
                users:[...state.users,payload]
            }
            default:
                return state
    }
}

export default UserReducer