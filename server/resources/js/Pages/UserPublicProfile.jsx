import { Header } from "@/components/Header"

function UserPublicProfile ({user}){
  console.log('Profile', user)
  return (
    <div>
      <div className='fixed-top bg-white'>
        <Header />
      </div>
      hello Profile 
    </div>
  )
}

export default UserPublicProfile