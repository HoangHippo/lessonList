import { createContext, useReducer } from 'react'
import { authReducer } from '../reducers/authReducer'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants'
import axios from 'axios'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    // Change reducer ( dispatch )
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    const loadUser = async () =>{
        if(localStorage[LOCAL_STORAGE_TOKEN_NAME]){
            set
        }
    }

    // Login
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            // Save token in localstorage
            if (response.data.success)
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken)

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    // Context date
    const authContextData = { loginUser }

    // Return provider
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider