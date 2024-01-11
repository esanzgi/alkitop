import { getUserByIdOwnerService } from "@/service/users"
import { useCallback } from "react"
import { useState } from "react"

export function useUser() {
  const [users, setUsers] = useState([])

  const getUserByIdOwner = useCallback(async ({ idOwner }) => {

    try {

      const newUsers = await getUserByIdOwnerService({ idOwner })
      setUsers(newUsers)
    } catch (e) {
      console.error('Error al obtener el usuario:');
    }
  }, [])
  return { users, getUserByIdOwner }
}