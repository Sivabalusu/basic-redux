export const increment = (number) =>{
    return {
        type: 'INCREMENT',
        payload: number
    }
}
export const decrement = (number) =>{
    return {
        type: 'DECREMENT',
        payload: number
    }
}
export const sign_in = () =>{
    return {
        type: 'LOGIN'
       
    }
}
export const logout = () =>{
    return {
        type: 'LOGOUT'
    }
}