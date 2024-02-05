import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import MapComponent from "@/components/MapComponent";
import { ProductDetailsContent } from "@/components/productDetail/ProductDetailsContent"
import { useUserContext } from '@/context/userContext';



const PRODUCT = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
  ],
  rating: {
    rate: 3.9,
    count: 120
  }
}

function ProductDetails({ product, user, owner }) {
  const { login } = useUserContext();
  login(user)

  return (
    < main className='' >
      <div className='fixed-top bg-white'>
        <Header />
      </div>

      <div className='container-md mt-5 pt-5'>
        <ProductDetailsContent product={product} owner={owner} user={user} />
      </div>

      <div className='mt-5 pt-5 bg-light border-top'>
        <div className='container-md'>
          <Footer />
        </div>
      </div>
      <div>
        <h1>MAPA</h1>
        <MapComponent location={'Los Angeles'} />
      </div>
    </main >
  )
}

export default ProductDetails


