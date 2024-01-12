import { Products } from '@/components/Products';
export function GustokoenProduktuak({ products }) {
  console.log('Products:', products);

  return (
    <>
      <div className='d-flex justify-content-center my-5'>
        <div className=' col-9 mt-4'>
          <h1 className='mb-4'>Zure gustokoen produktuak</h1>
          <Products products={products} />
        </div>
      </div>
    </>
  );
}
