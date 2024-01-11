export const getUserByIdOwnerService = async ({ idOwner }) => {
  if (!idOwner) return null

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/users/${idOwner}`)
    const user = await response.json()
    return {
      id: user.id_user,
      name: user.name,
      email: user.email,
    };
  } catch (error) {
    throw new Error('Error searching user with idOwner:  ' + idOwner)
  }
} 