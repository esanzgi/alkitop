import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { user, setUser } = useState(null)
  const { role, setRole } = useState(null)

  const login = (userData, userRole) => {
    setUser(userData)
    setRole(userRole)
  }

  const logout = () => {
    setUser(null)
    setRole(null)
  }

  return (
    <UserContext.Provider value={{ user, role, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
} 