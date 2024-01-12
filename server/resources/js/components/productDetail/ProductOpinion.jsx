export function ProductOpinion({ ratings }) {
  console.log('ratings', ratings)

}

const ListOfOpinioins = ({ ratings }) => {

  return (
    <div className="row">
      {ratings.map(rate => {
        
      })}
    </div>
  )
} 