import AdminMenu from '@/components/AdminMenu'
import { Header } from '@/components/Header'
import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useUserContext } from '@/context/userContext'

export default function RestoreUser({users, user}) {
  const { login } = useUserContext()

  useEffect(() => {
    login(user)
  }, [])
  login(user)

  return (
    <div>
      <Header user={user}></Header>
      <AdminMenu></AdminMenu>
      <table className="table table-striped">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role ID</th>
        </tr>
        {
          users.map((user)=>(
            <tr>
              <td>{user.id_user}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.id_role}</td>
              <td>
                <form action='/admin/users/berreskuratu' method="post">
                  <input type='hidden' value={user.id_user} name='id_user' />
                  <input type="submit" value="Berreskuratu" />
                </form>
              </td>
            </tr>
          )
      
          )
        }
      </table>
    </div>
  )
}
