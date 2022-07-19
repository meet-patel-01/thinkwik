import { Keys } from "./Keys"

let InitState = {
    user: null,
    registerUsers: JSON.parse(localStorage.getItem("registerUsers")),
    todos: []
}

export const AppReducer = (state = InitState, action) => {       
    switch(action.type){

        case Keys.login:  return {
            ...state,
            user: action.payload
        }

        case Keys.logout:  return {
            ...state,
            user: null
        }

        case Keys.register:  return {
            ...state,
            registerUsers: [...state.registerUsers ?? "", action.payload]
        }

        case Keys.addTodo: return {
            ...state,
            todos: [...state.todos, action.payload]
        }

        case Keys.editTodo: {
            let newTodos = [...state.todos]
            newTodos[action.payload.index] = {...action.payload}
            return {
            ...state, todos: newTodos           
        }}

        case Keys.deleteTodo: return {
            ...state,
            todos: state.todos.filter((e) => e.id !== action.payload)
        }

        default: return InitState
    }
}