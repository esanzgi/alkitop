import { Header } from '@/components/Header'
import React from 'react'

export default function EditProduct({product}) {
  var product=product[0]

  return (
    <div>
      <Header></Header>
      <form action="/admin/produktuak/update" class="container mt-4">
        <input type="hidden" name='id' id='id' value={product.id_product} />

        <div class="mb-3">
          <label for="productName" class="form-label">Product Name</label>
          <input type="text" id="productName" name="productName" class="form-control" defaultValue={product.name} />
        </div>
        
        <div class="mb-3">
          <label for="productDescription" class="form-label">Product Description</label>
          <input type="text" id="productDescription" name="productDescription" class="form-control" defaultValue={product.description} />
        </div>
        
        <div class="mb-3">
          <label for="ownerId" class="form-label">Owner ID</label>
          <input type="text" id="ownerId" name="ownerId" class="form-control" defaultValue={product.id_owner} />
        </div>
        
        <div class="mb-3">
          <label for="isEco" class="form-label">Is Eco</label>
          <input type="text" id="isEco" name="isEco" class="form-control" defaultValue={product.isEco} />
        </div>
        
        <div class="mb-3">
          <label for="productPrice" class="form-label">Product Price</label>
          <input type="text" id="productPrice" name="productPrice" class="form-control" defaultValue={product.price} />
        </div>
        
        <div class="mb-3">
          <label for="productLocation" class="form-label">Product Location</label>
          <input type="text" id="productLocation" name="productLocation" class="form-control" defaultValue={product.location} />
        </div>
        
        <div class="mb-3">
          <label for="productCategory" class="form-label">Product Category</label>
          <input type="text" id="productCategory" name="productCategory" class="form-control" defaultValue={product.category} />
        </div>
        
        <div class="mb-3">
          <label for="productFrequency" class="form-label">Product Frequency</label>
          <input type="text" id="productFrequency" name="productFrequency" class="form-control" defaultValue={product.frequency} />
        </div>
        
        <button type="submit" class="btn btn-primary">Editatu</button>
      </form>

    </div>
  )
}
