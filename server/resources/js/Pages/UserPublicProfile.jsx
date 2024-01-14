import { Header } from "@/components/Header"
import { UserDetails } from "@/components/user/UserDetails"
import { useUserContext } from "@/context/userContext"

function UserPublicProfile ({user}){
  const {user: userLogged} = useUserContext()
  console.log('LOGGED USER', userLogged)
  console.log('Profile', user)
  return (
    <div>
      <div className='fixed-top bg-white'>
        <Header />
      </div>

      <div className='container-md mt-5 pt-5'>
        <UserDetails user={user}/>
      </div>
    </div>
  )
}

export default UserPublicProfile