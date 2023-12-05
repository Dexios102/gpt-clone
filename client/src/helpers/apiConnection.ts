import axios from "axios";

export const loginUserAPI = async (email: string, password: string) => {
    const res = await axios.post('/users/signin',{email, password});
    if (res.status !== 200) {
        throw new Error('Failed to login, please try again');
    }
    const userData = await res.data;
    return userData;
}

export const checkAuthAPI = async () => {
    const res = await axios.get('/users/auth-status');
    if (res.status !== 200) {
        throw new Error('Unable to authenticate, please try again');
    }
    const userData = await res.data;
    return userData;
}
