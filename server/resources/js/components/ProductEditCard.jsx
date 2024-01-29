import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PUBLIC_IMAGES_URL } from '@/assets/utils/constants';

export default function ProductEditCard({ product }) {
  const { register, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    setValue('name', product.name);
    setValue('price', product.price);
    setValue('description', product.description);
    setValue('location', product.location);
    setValue('category', product.category);
    setValue('frequency', product.frequency);
  }, [setValue, product]);

  const onSubmit = (data) => {
    const combinedImages = [...product.images, ...newImages];
    console.log('Datos del formulario con imágenes:', { ...data, images: combinedImages });
  };

  const handleDeleteImage = (index) => {
    console.log('Eliminar imagen en el índice:', index);
  };

  const addImage = () => {
    post(`/products/${product.id_product}/addImage`);
  };  


  return (
    <div className='mt-5 pt-5 mx-5 px-5'>
      <div className='mt-5 bg-light w-full h-full mx-5 shadow border rounded'>
        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center'>
          <h2 className='p-4'>Produktua editatu</h2>

          <div className='align-self-start'>

            <div className='p-4'>
              <p htmlFor='newImages'>Irudi berri bat gehitu:</p>
              <input
                type='file'
                id='newImages'
                name='newImages'
                multiple
              />
              <button type='button' onClick={addImage}>
                Añadir Imagen
              </button>
            </div>


            <div className='p-4'>
              <label>Produktuaren irudiak:</label>
              <ul className='list-unstyled'>
                {product.images.map((image, index) => (
                  <li key={index} className='mb-2'>
                    <img
                      src={PUBLIC_IMAGES_URL + image.image_path}
                      alt={image.image_path}
                      className='rounded-3 w-25'
                    />
                    <button type='button' onClick={() => handleDeleteImage(index)} className='btn btn-sm btn-danger ms-2'>
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className='p-4'>
              <label htmlFor='price'>Precio:</label>
              <input
                type='text'
                id='price'
                name='price'
                {...register('price')}
              />
            </div>

            <div className='p-4'>
              <label htmlFor='description'>Descripción:</label>
              <textarea
                id='description'
                name='description'
                {...register('description')}
              />
            </div>

            <div className='p-4'>
              <label htmlFor='location'>Ubicación:</label>
              <input
                type='text'
                id='location'
                name='location'
                {...register('location')}
              />
            </div>

            <div className='p-4'>
              <label htmlFor='category'>Categoría:</label>
              <input
                type='text'
                id='category'
                name='category'
                {...register('category')}
              />
            </div>

            <div className='p-4'>
              <label htmlFor='frequency'>Frecuencia:</label>
              <input
                type='text'
                id='frequency'
                name='frequency'
                {...register('frequency')}
              />
            </div>

          </div>


          <div className='p-4'>
            <button type='submit'>Editatu</button>
          </div>
        </form>
      </div>
    </div>
  );
}
