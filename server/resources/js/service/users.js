//import { APP_URL } from "@/assets/utils/constants";

export const getUserDetailsByIdOwnerService = async ({ idOwner }) => {
  if (!idOwner) return null
  //127.0.0.1
  //
  try {
    const response = await fetch(`${APP_URL}/api/users/${idOwner}`)
    const user = await response.json()
    return {
      idUser: user.id_user,
      name: user.name,
      email: user.email,
      createdAt: user.created_at,
      birthdate: user.birthdate,
      country: user.country,
      city: user.city,
      gender: user.gender,
      idDetail: user.id,
      province: user.province,
      profileImage: user.profile_image,
      bio: user.bio,
      phoneNumber: user.phone_number,
    };
  } catch (error) {
    throw new Error('Error searching user with idOwner:  ' + idOwner)
  }
}

export const getUserDetailsByIdUserService = async ({ idUser }) => {
  if (!idUser) return null

  try {
    const response = await fetch(`/api/users/details/${idUser}`)
    const user = await response.json()
    return {
      idDetail: user.id,
      idUser: user.id_user,
      name: user.name || 'Defektuzko izena',
      country: user.country || 'Hutsa',
      province: user.province,
      city: user.city || 'Hutsa',
      profileImage: user.profile_image,
      birthdate: user.birthdate,
      gender: user.gender,
      bio: user.bio,
      phoneNumber: user.phone_number,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    }
  } catch (error) {
    throw new Error('Errorea userdetail jasotzean')
  }
}