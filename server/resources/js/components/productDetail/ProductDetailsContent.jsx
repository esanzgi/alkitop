import { useUser } from "@/hooks/useUser"
import { useEffect } from "react"
import { ProductDetailCard } from "./ProductDetailCard"

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
    </div>
  )
}