import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null)
  const [role, setRole] = useState(null)

  const login = (userData, userRole) => {
    setLoggedUser(userData)
    setRole(userRole)
  }

  const logout = () => {
    setUser(null)
    setRole(null)
  }

  return (
    <UserContext.Provider value={{ loggedUser, role, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
} 