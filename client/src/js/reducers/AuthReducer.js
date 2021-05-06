import {
  LOGIN_USER_SUCCESS,
  SET_LOADING,
  AUTH_FAIL,
  GET_AUTH_USER,
  LOGOUT
} from "../const";
const initialState = {
  isAuth: false,
  isLoading: false,
  user: null,
  token: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload.user,
        isLoading: false,
        token: payload.token,
      };
    case SET_LOADING:
      return { ...state, isLoading: true };
    case AUTH_FAIL:
        case LOGOUT:
      return {
        ...state,
        isLoading: false,
        token: null,
        user: null,
        isAuth: null,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        isAuth: true,
        user: payload.user,
      };
    default:
      return state;
  }
};
