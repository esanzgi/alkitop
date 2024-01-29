import { FilterNav } from "@/components/FilterNav"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Products } from "@/components/Products"
import { useUserContext } from "@/context/userContext"
import { useEffect } from "react"

const ProductsByCategory = ({ products, user }) => {
  console.log('category products', products)
  const { login } = useUserContext()
  useEffect(() => {
    login(user)
  }, [])

  console.log('productsssss', products)

  return (
    <>
      <div className='fixed-top bg-white'>
        <Header user={user} />
        <div className='shadow-sm bg-light'>
          <div className='container-md pt-2'>
            <FilterNav />
          </div>
        </div>
      </div>

      <div className='home-content container pb-5'>
        <Products products={products} />
      </div>

      <div className='mt-5 pt-5 bg-light border-top'>
        <div className='container-md'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ProductsByCategory