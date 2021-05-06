import {
  LOGIN_USER_SUCCESS,
  SET_LOADING,
  AUTH_FAIL,
  GET_AUTH_USER,
  LOGOUT,
} from "../const";
import axios from "axios";
export const login = (formData) => async (dispatch) => {
  //formdata={email,password}
  dispatch({
    type: SET_LOADING,
  });
  try {
    const res = await axios.post("/api/auth/login", formData);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("token", res.data.token); // save the token of auth user in the localstorage
  } catch (error) {
    const resp = error.response.data;
    if (Array.isArray(resp)) {
      resp.forEach((err) => alert(err.msg));
    }
    dispatch({
      type: AUTH_FAIL,
    });
  }
};
export const getAuthUser = () => async (dispatch) => {
  const config = {
    headers: {
      authorisation: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/auth/me", config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
