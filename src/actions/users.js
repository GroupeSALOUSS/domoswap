import * as api from '../api'
import { Signin } from '../containers'

export const signIn = (formdata, history) => async (dispatch)  => {
    try {
        const {data} = await api.signIn(formdata)
        dispatch({type: Signin, payload: formdata})
        console.log(formdata)
       history.push('/');
    } catch (error) {
        console.log(error)
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user)
        dispatch({ type: 'SIGNIN', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
