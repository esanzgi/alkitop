import { UserProfileCircle } from "../Icons"

export const UserDetails = ({user}) => {
  console.log('DETAILS', user)
  return (
    <div className="mt-5">
      <div className="border-bottom pb-2">
        <h1>Perfil publikoa</h1>
      </div>
      
      <div className="mt-5">
        <UserProfileCircle user={user} width={200} height={200} enableTooltip={false} enableLink={false} />
      </div>
    </div>
  )
}