import { getUserDetailsByIdOwnerService, getUserDetailsByIdUserService } from "@/service/users"
import { useCallback } from "react"
import { useState } from "react"

export function useUser() {
  const [users, setUsers] = useState([])
  const [userDetails, setUserDetails] = useState({})

  const getUserByIdOwner = useCallback(async ({ idOwner }) => {
    if (!idOwner) return null
    try {

      const newUsers = await getUserDetailsByIdOwnerService({ idOwner })
      setUsers(newUsers)
    } catch (e) {
      console.error('Error al obtener el usuario:');
    }
  }, [])


  const getUserDetailsByIdUser = useCallback(async ({ idUser }) => {
    console.log('IDUSER', idUser)
    try {
      const newUsersDetails = await getUserDetailsByIdUserService({ idUser })
      setUserDetails(newUsersDetails)
      console.log('USER DETAILS TRY', newUsersDetails)
    } catch (e) {
      console.error('Error al obtener los detalles del usuario: ' + idUser);
    }
  }, [])

  return { users, userDetails, getUserByIdOwner, getUserDetailsByIdUser }
}