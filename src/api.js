import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/v1/'
});

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' })
  try {
    const res = await axiosInstance.post('login', userCredential)
    console.log(res.data)
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err })
  }
}
