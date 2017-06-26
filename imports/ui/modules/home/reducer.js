import { 
  GET_ALL_BLOGS,
  GET_BLOG,
  TITLE_TEXT_CHANGE,
  DESCRIPTION_TEXT_CHANGE,
} from './actions/actionTypes'

const initialState = {
  blogs: [],
  blog: {},
  title: '',
  description: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TITLE_TEXT_CHANGE: 
      return Object.assign({}, state, { title: action.payload })
    case DESCRIPTION_TEXT_CHANGE:
      return Object.assign({}, state, { description: action.payload })
    case GET_ALL_BLOGS: 
      return Object.assign({}, state, { blogs: action.payload })
    case GET_BLOG:
      return Object.assign({}, state, { blog: action.payload })
    default:
      return state
  }
}