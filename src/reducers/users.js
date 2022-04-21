

export default (users = [] ,action ) =>{
    switch (action.type) {
        case 'FETCH' :
            return users;
        case 'CREATE':
            return [...users, action.payload];
        default:
            return users;
    }
}