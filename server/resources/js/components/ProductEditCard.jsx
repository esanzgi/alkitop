import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PUBLIC_IMAGES_URL } from '@/assets/utils/constants';
import { allCategories } from '@/assets/utils/constants';

export default function ProductEditCard({ product }) {
  const { register, handleSubmit, setValue } = useForm();

  console.log(product.images);

  React.useEffect(() => {
    setValue('name', product.name);
    setValue('price', product.price);
    setValue('description', product.description);
    setValue('location', product.location);
    setValue('category', product.category);
    setValue('frequency', product.frequency);
    setValue('isEco', product.isEco); // Added for the isEco property
  }, [setValue, product]);



  return (
    <div className='mt-5 pt-5 mx-5 px-5'>
      <div className='mt-5 bg-light w-full h-full mx-5 shadow border rounded d-flex flex-column'>
        <h2 className='p-4 align-self-center'>Produktua editatu</h2>

        <div className='align-self-start'>

          <form action='/products/addImage' method='post' className='p-4' encType="multipart/form-data">
            <p htmlFor='newImages'>Irudi berri bat gehitu:</p>
            <input
              type='file'
              id='irudia'
              name='irudia'
            />
            <input type='hidden' name="id" value={product.id_product} />
            <input type='submit' value="Irudia gehitu" />
          </form>

          <div className='p-4'>
            <label>Produktuaren irudiak:</label>
            <ul className='list-unstyled'>
              {product.images.map((image, index) => (
                <li key={index} className='mb-2'>
                  <img
                    src={PUBLIC_IMAGES_URL + image.image_path}
                    alt={image.image_path}
                    className='rounded-3'
                    style={{ width: '150px' }}
                  />
                  <form action='/deleteImage' method='post' className='d-inline'>
                    <input type='submit' className='btn btn-sm btn-danger ms-2' value="Ezabatu" />
                    <input type="hidden" name="irudia" value={image.id} />
                    <input type="hidden" name="id" value={image.product_id} />
                  </form>
                </li>
              ))}
            </ul>
          </div>

          <form action='/updateProduct' method='post' className=''>
            <div className='p-4'>
              <label htmlFor='price'>Prezioa:</label>
              <input
                type='text'
                id='price'
                name='price'
                {...register('price')}
              />
            </div>

            <div className='p-4'>
              <label htmlFor='description'>Deskripzioa:</label>
              <textarea
                id='description'
                name='description'
                {...register('description')}
              />
            </div>

            <div className='p-4'>
              <label htmlFor='location'>Kokapena:</label>
              <input
                type='text'
                id='location'
                name='location'
                {...register('location')}
              />
            </div>

            <div className='p-4'>
              <label htmlFor='category'>Kategoria:</label>
              <select id='category' name='category' {...register('category')} defaultValue={product.category}>
                <option value=''>Aukeratu</option>
                {allCategories?.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className='p-4'>
              <label htmlFor='frequency'>Zenbatero:</label>
              <select id='frequency' name='frequency' {...register('frequency')}>
                <option value=''>Aukeratu</option>
                <option value='daily'>Egunero</option>
                <option value='weekly'>Astero</option>
                <option value='monthly'>Hilero</option>
              </select>
            </div>

            <div className='p-4'>
              <label htmlFor='isEco'>Eko produktua:</label>
              <input
                type='checkbox'
                id='isEco'
                name='isEco'
                {...register('isEco')}
              />
            </div>
            <input type='hidden' name="id" value={product.id_product} />

            <div className='p-4 align-self-center'>
              <button type='submit'>Editatu</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
