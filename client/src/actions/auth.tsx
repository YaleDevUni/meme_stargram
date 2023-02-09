import {
    REFRESH_TOKEN
} from "./types";

import AuthService from "../services/auth.service";

export const register = ...;

export const login = ...;

export const logout = ...;

export const refreshToken = (accessToken) => (dispatch) => {
    dispatch({
        type: REFRESH_TOKEN,
        payload: accessToken,
    })
}