import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    EDIT_TODO
} from "../constants/actionsTypes"



const data = [
    {text : "task 1", id:Math.random(), isComplete : false},
    {text : "task 2", id:Math.random(), isComplete : true},

]


const TodoReducer = (state= data, action) => {
    switch (action.type){


        case ADD_TODO:
            return [
                ...state,
                {
                    id : Math.random(),
                    text : action.payload.text,
                    isComplete : false
                }
            ]

        case DELETE_TODO : 
            return state.filter(todo => todo.id !== action.payload)

        case COMPLETE_TODO :
            return state.map(todo => todo.id === action.payload ? {...todo, isComplete: !todo.isComplete} : todo)




        case EDIT_TODO :
            return state.map(todo => todo.id === action.index ? {...todo, 
                text : action.payload} : todo)


        default:
            return state
    }
}

export default TodoReducer