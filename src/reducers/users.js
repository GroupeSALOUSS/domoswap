export default (state = {authdata: null}, action) => {
    switch (action.type) {
        case 'SIGNIN':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return { ...state, authData: action.data, loading: false, errors: null };
        case 'SIGNUP':
            return [...state, action.payload];
        default:
            return state;
    }
}