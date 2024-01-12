import { useUser } from "@/hooks/useUser"
import { useEffect } from "react"
import ProductDetailCard from "./ProductDetailCard";
import { ProductOpinion } from "./ProductOpinion";

export function ProductDetailsContent({ product }) {
  const { users, getUserByIdOwner } = useUser()

  useEffect(() => {
    getUserByIdOwner({ idOwner: product.product.id_owner })
  }, [getUserByIdOwner])

  return (
    <div className="mt-5">
      <div className="border-bottom d-flex justify-content-between align-items-center">
        <h2 className="h2">{product.product.name}</h2>
        <span className="fs-5">{users.name}</span>
      </div>

      <div className="mt-4">
        <ProductDetailCard product={product} />
      </div>

      <div className='row mt-5'>
        <div className='d-flex align-items-center border-bottom'>
          <span className='h2'>Iritziak</span>
        </div>

        <div className="col-12">
          <ProductOpinion ratings={product.rating} />
        </div>
      </div>
    </div>
  )
}