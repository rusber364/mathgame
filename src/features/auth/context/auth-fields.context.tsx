import { createContext, useContext } from 'react'

export const AuthFieldsContext = createContext({ email: '', password: '' })
export const useAuthFieldsContext = () => useContext(AuthFieldsContext)
