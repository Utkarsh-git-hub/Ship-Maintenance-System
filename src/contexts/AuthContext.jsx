import React, { createContext, useState, useEffect } from 'react'
import { load, save } from '../utils/localStorageUtils'
import mock from '../mockData.json'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => load('session', null))

  useEffect(() => { save('session', user) }, [user])

  const login = (email, password) => {
    const users = load('users', mock.users)
    const u = users.find(x => x.email===email && x.password===password)
    if (u) setUser(u)
    return !!u
  }
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
