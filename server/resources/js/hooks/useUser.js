import { getUserByIdOwnerService, getUserDetailsByIdUserService } from "@/service/users"
import { useCallback } from "react"
import { useState } from "react"

export function useUser() {
  const [users, setUsers] = useState([])
  const [userDetails, setUserDetails] = useState({})

  const getUserByIdOwner = useCallback(async ({ idOwner }) => {

    try {

      const newUsers = await getUserByIdOwnerService({ idOwner })
      setUsers(newUsers)
    } catch (e) {
      console.error('Error al obtener el usuario:');
    }
  }, [])


  const getUserDetailsByIdUser = useCallback(async ({ idUser }) => {

    try {

      const newUsersDetails = await getUserDetailsByIdUserService({ idUser })
      setUserDetails(newUsersDetails)
    } catch (e) {
      console.error('Error al obtener los detalles del usuario: ' + idUser);
    }
  }, [])

  return { users, userDetails, getUserByIdOwner, getUserDetailsByIdUser }
}