import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PUBLIC_IMAGES_URL } from '@/assets/utils/constants';
import { allCategories } from '@/assets/utils/constants';

export default function ProductEditCard({ product, user }) {
  const { register, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    setValue('name', product.name);
    setValue('price', product.price);
    setValue('description', product.description);
    setValue('location', product.location);
    setValue('category', product.category);
    setValue('frequency', product.frequency);
    setValue('isEco', product.isEco);
  }, [setValue, product]);

  return (
    <div className='mt-5 pt-5 mx-5 px-5'>
      <div className='mt-5 bg-light w-full h-full mx-5 shadow border rounded d-flex flex-column'>
        <h2 className='p-4 align-self-center'>Produktua editatu</h2>

        <div className=' d-flex flex-column align-items-center'>
          <div className='d-flex flex-row'>
            <div className='p-4 '>
              <label>Produktuaren irudiak:</label>
              <ul className='list-unstyled d-flex flex-row flex-wrap'>
                {product.images.map((image, index) => (
                  <li key={index} className='mb-2 d-flex flex-column mx-2'>
                    <img
                      src={PUBLIC_IMAGES_URL + image.image_path}
                      alt={image.image_path}
                      className='rounded-3 img-thumbnail'
                      style={{ width: '150px' }}
                    />
                    <form action='/deleteImage' method='post' className='d-inline'>
                      <button type='submit' className='btn btn-sm btn-danger ms-2'>Ezabatu</button>
                      <input type="hidden" name="irudia" value={image.id} />
                      <input type="hidden" name="id" value={image.product_id} />
                    </form>
                  </li>
                ))}
              </ul>
            </div>
            <form action='/products/addImage' method='post' className='p-4 align-self-center border rounded me-5 bg-white d-flex flex-column align-items-center' encType="multipart/form-data">
              <div className='mb-3'>
                <label htmlFor='irudia' className='form-label'>Irudi berri bat gehitu:</label>
                <input
                  type='file'
                  id='irudia'
                  name='irudia'
                  className='form-control'
                />
              </div>
              <input type='hidden' name="id" value={product.id_product} />
              <button type='submit' className='btn btn-primary'>Irudia gehitu</button>
            </form>
          </div>


          <form action='/updateProduct' method='post' className='d-flex flex-column align-self-center col-6'>
            <div className='mb-3'>
              <label htmlFor='price' className='form-label'>Prezioa:</label>
              <input
                type='text'
                id='price'
                name='price'
                {...register('price')}
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='description' className='form-label'>Deskripzioa:</label>
              <textarea
                id='description'
                name='description'
                {...register('description')}
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='location' className='form-label'>Kokapena:</label>
              <input
                type='text'
                id='location'
                name='location'
                {...register('location')}
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='category' className='form-label'>Kategoria:</label>
              <select id='category' name='category' {...register('category')} defaultValue={product.category} className='form-select'>
                <option value=''>Aukeratu</option>
                {allCategories?.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className='mb-3'>
              <label htmlFor='frequency' className='form-label'>Zenbatero:</label>
              <select id='frequency' name='frequency' {...register('frequency')} className='form-select'>
                <option value=''>Aukeratu</option>
                <option value='daily'>Egunero</option>
                <option value='weekly'>Astero</option>
                <option value='monthly'>Hilero</option>
              </select>
            </div>

            <div className='mb-3'>
              <div className='form-check'>
                <input
                  type='checkbox'
                  id='isEco'
                  name='isEco'
                  {...register('isEco')}
                  className='form-check-input'
                />
                <label htmlFor='isEco' className='form-check-label'>Eko produktua</label>
              </div>
            </div>
            <input type='hidden' name="id" value={product.id_product} />

            <div className='mb-3 align-self-center'>
              <button type='submit' className='btn btn-primary'>Editatu</button>
            </div>
          </form>
          <form action='/produktua/delete' method='post'>
            <input type='submit' className='btn btn-danger my-3' value="Produktua ezabatu"/>
            <input type='hidden' name='product_id' value={product.id_product}/>
          </form>
        </div>
      </div>
    </div>
  );
}
