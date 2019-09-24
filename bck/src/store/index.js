import { createStore } from 'redux'

const INITIAL_STATE = {
    posts:[],
    listPosts:[],
    keyControl: null,
    disciplina: null,
    serie: null,
    professor: null,
    limit:2,
    contador:2
}
function Posts(state = INITIAL_STATE, action){
    switch (action.type){
        case "GET_POSTS" : return { ...state, posts: [state.posts, action.posts]}
    }
}

const store = createStore({Posts})

export default store