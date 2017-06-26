import { 
  GET_ALL_BLOGS,
  GET_BLOG
} from './actions/actionTypes'

const initialState = {
  blogs: [],
  blog: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BLOGS: 
      return Object.assign({}, state, { blogs: action.payload })
    case GET_BLOG:
      return Object.assign({}, state, { blog: action.payload })
    default:
      return state
  }
}