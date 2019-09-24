
import { createStore } from 'redux'

const INITIALSTATE = {
    disciplina: null,
    serie: null,
    professor: null,
    fullPosts:[]
    
}




function posts(state = INITIALSTATE, action){
    switch (action.type){
        case 'SET_POSTS': 
            return { ...state,  fullPosts:action.posts}
    default:
        return state
    }
}

const store = createStore(posts)

export default store