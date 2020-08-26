import axios from 'axios';



const signin = (email, password) => async (dispatch) => {
    dispatch({ type: 'USER_SIGNIN_REQUEST', payload: { email, password } });

    try {
        const { data } = await axios.post('/users/create', { email, password })
        dispatch({ type: 'USER_SIGNING_SUCCESS', payload: data })

    } catch (error) {
        dispatch({ type: 'USER_SIGNING_FAIL', payload: error.message });
    }
}

export default signin;