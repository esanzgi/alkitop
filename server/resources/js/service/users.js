import { APP_URL } from "@/assets/utils/constants";

export const getUserByIdOwnerService = async ({ idOwner }) => {
  if (!idOwner) return null
  //127.0.0.1
  //
  try {
    const response = await fetch(`${APP_URL}/api/users/${idOwner}`)
    const user = await response.json()
    return {
      id: user.id_user,
      name: user.name,
      email: user.email,
      createdAt: user.created_at
    };
  } catch (error) {
    throw new Error('Error searching user with idOwner:  ' + idOwner)
  }
} 