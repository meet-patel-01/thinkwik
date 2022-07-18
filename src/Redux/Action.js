import { Keys } from "./Keys"

export const Login = (payload) => {    
    return {
        type: Keys.login,
        payload
    }
}

export const Register = (payload) => {
    return {
        type: Keys.register,
        payload
    }
}

export const Logout = () => {
    return {
        type: Keys.logout,        
    }
}

export const AddTodo = (payload) => {
    return {
        type: Keys.addTodo,     
        payload
    }
}

export const EditTodo = (payload) => {
    return {
        type: Keys.editTodo,     
        payload
    }
}

export const DeleteTodo = (payload) => {
    return {
        type: Keys.deleteTodo,     
        payload
    }
}

