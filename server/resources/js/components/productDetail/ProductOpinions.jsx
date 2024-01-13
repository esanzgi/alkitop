import { ProductOpinionCard } from "./ProductOpinionCard"

export function ProductOpinions({ ratings }) {
  const hasRatings = ratings.length > 0 ? true : false
  console.log('ratings', hasRatings)
  return hasRatings ? <ListOfOpinions ratings={ratings} /> : <NoOpinionsMessage />;
}

const ListOfOpinions = ({ ratings }) => {

  return (
    <div className="row">
      {ratings.map(rate => (
      <div className="mt-5" key={rate.id_rating}>
        <ProductOpinionCard rating={rate}/>
      </div> 
      ))}
    </div>
  )
} 

const NoOpinionsMessage = () => (
  <div className="text-center mt-3">
    <p className="fw-bold fs-5">No hay opiniones disponibles</p>
    <p className="text-muted">Sé el primero en dejar tu opinión.</p>
  </div>
);