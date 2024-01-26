import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { PrivateProductDetailsContent } from "@/components/productDetail/PrivateProductDetailsContent"

 export default function PrivateProductDetails ({ product }) {
  return (
    < main className='' >
      <div className='fixed-top bg-white'>
        <Header />
      </div>

      <div className='container-md mt-5 pt-5'>
        <PrivateProductDetailsContent product={product} />
      </div>

      <div className='mt-5 pt-5 bg-light border-top'>
        <div className='container-md'>
          <Footer />
        </div>
      </div>
    </main >
  )
}



