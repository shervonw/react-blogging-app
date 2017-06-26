import { GET_ALL_BLOGS } from './actions/actionTypes'

const initialState = {
  blogs: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BLOGS: 
      return Object.assign({}, state, { blogs: action.payload })
    default:
      return state
  }
}