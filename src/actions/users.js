import * as api from '../api'

export const getUser = () => async (dispatch)  => {
    try {
        const { data } = await api.fetchUser
        dispatch({ type: 'FETCH', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }

}
