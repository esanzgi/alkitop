import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { UserDetails } from "@/components/user/UserDetails"
import { useUserContext } from "@/context/userContext"

function UserPublicProfile({ user }) {
  const { user: userLogged } = useUserContext()
  console.log('USER LOGED', user)
  return (
    <div>
      <div className='fixed-top bg-white'>
        <Header />
      </div>

      <div className='container-md mt-5 pt-5'>
        <UserDetails user={user} />
      </div>

      <div className='mt-5 pt-5 bg-light border-top'>
        <div className='container-md'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default UserPublicProfile