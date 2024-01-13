import { useUser } from "@/hooks/useUser"
import { useEffect, useState } from "react"
import ProductDetailCard from "./ProductDetailCard";
import { ProductOpinions } from "./ProductOpinions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faStar } from "@fortawesome/free-solid-svg-icons";
import { UserProfileCircle } from "../Icons";
import { intlFormatDistance, parseISO } from "date-fns";
import { OpinionInput } from "./OpinionInput";

export function ProductDetailsContent({ product }) {
  const { users, getUserByIdOwner } = useUser()
  const [formatedData, setFormatedData] = useState()

  console.log('RATING', product)

  useEffect(() => {
    if (users.createdAt) {
      const data = intlFormatDistance(parseISO(users.createdAt), new Date())
      setFormatedData(data)
    }
  }, [users])
  
  const avgRatingValue = product.avgRating.length > 0
  ? product.avgRating[0].avg_rating.replace('.', ',')
  : '0';

  useEffect(() => {
    getUserByIdOwner({ idOwner: product.product.id_owner })
  }, [getUserByIdOwner])

  return (
    <div className="mt-5">
      <div className="border-bottom d-flex justify-content-between align-items-center pb-2">
        <h2 className="h2 fw-bold">{product.product.name}</h2>
        <div className="d-flex align-items-center">
          <span className="fs-5 me-2">{users.name}</span>
          <UserProfileCircle width={55} height={55} imageUrl={'https://via.placeholder.com/640x480.png/0011dd?text=pariatur'}/>
        </div>
      </div>

      <div className="mt-4">
        <ProductDetailCard product={product} />
      </div>

      <div className='row mt-5'>
        <div className='d-flex align-items-center justify-content-between border-bottom pb-2'>
          <span className='h2 fw-bold'>Iritziak</span>
          <div className="fs-3 fw-bold fst-italic text-align">
            <FontAwesomeIcon className="text-warning" icon={faStar}/>
            <span className="ms-2 ">{avgRatingValue}</span>
            <FontAwesomeIcon className="ms-3" icon={faMinus} />
            <span className="ms-3 ">{product.rating.length} balorazio</span>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5 mb-4">
          <OpinionInput />
        </div>
        <div className="col-12">
          <ProductOpinions ratings={product.rating} />
        </div>

      </div>
    </div>
  )
}