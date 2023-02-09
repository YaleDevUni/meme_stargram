import { USER_LOGIN_SUCCESS } from '../constants/userConstants'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../store'
export const login = (email: string, password: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_LOGIN_SUCCESS
            })

        } catch (error) { }
    }