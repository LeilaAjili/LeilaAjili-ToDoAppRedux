import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    EDIT_TODO
} from "../constants/actionsTypes"


export function addTodo(payload){
    return {
        type: ADD_TODO,
        payload
    }
}

export function deleteTodo (payload){
    return{
        type : DELETE_TODO,
        payload
    }
}

export function completeTodo (payload){
    return{
        type : COMPLETE_TODO,
        payload
    }
}

export function editTodo (edittodo, id){
    return{
        type : EDIT_TODO,
        payload : edittodo,
        index :id
    }
}