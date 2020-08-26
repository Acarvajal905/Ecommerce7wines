import { USER_SIGNIN_REQUEST, USER_SIGNING_SUCCESS, USER_SIGNING_FAIL } from '../Actions/userActions'

export default function userSigninReducer(state = {}, action) {
    if (action.type === 'USER_SIGNIN_REQUEST') {
        return {
            loading: true
        }
    }
    if (action.type === 'USER_SIGNING_SUCCESS') {
        return {
            loading: false, userInfo: action.payload
        }
    }
    if (action.type === 'USER_SIGNING_FAIL') {
        return {
            loading: false, error: action.payload
        }
    }
    return state
}
