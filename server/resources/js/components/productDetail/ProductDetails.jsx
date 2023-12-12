import { ProductDetailCard } from './ProductDetailCard'

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

export function ProductDetails ({ product }) {
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center border-bottom'>
        <h3 className='h3 fw-bold'>{PRODUCT.title}</h3>
        <span>Eneko S</span>
      </div>
      <div className='d-flex mt-3'>
        <ProductDetailCard product={PRODUCT} />

      </div>
    </div>
  )
}
