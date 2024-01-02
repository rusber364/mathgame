import { createContext, useContext } from 'react'

export type AuthCredentials = ReturnType<typeof useAuthFieldsContext>

export const AuthFieldsContext = createContext({ email: '', password: '' })
export const useAuthFieldsContext = () => useContext(AuthFieldsContext)
