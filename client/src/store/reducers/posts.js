import {
  CREATE,
  UPDATE,
  FETCH_ALL,
  LIKE,
  DELETE,
  LOADING,
  ERROR,
} from "../../constants";

const initialState = {
  loading: null,
  error: null,
  posts: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case FETCH_ALL:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case CREATE:
      return {
        ...state,
        posts: [...state, action.payload],
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
}
