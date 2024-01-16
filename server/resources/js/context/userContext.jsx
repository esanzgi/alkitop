import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null)

  const login = (userData) => {
    setLoggedUser(userData)
  }

  const logout = () => {
    setLoggedUser(null)
  }

  return (
    <UserContext.Provider value={{ loggedUser, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
} 