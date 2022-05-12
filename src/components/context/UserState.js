
import React, {useReducer} from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import {informacion} from '../Form'
import {UPDATE_USERS} from './types'

const UserState = (props) =>{
    const initialState = {
        users:[]
    }

    const [state,dispatch] = useReducer(UserReducer,initialState)


    const getUpdate = (payload) =>{
        dispatch({
            type: UPDATE_USERS,
            payload
        })
    }

    console.log(state,"este es el state")
    

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUpdate,
            dispatch
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState