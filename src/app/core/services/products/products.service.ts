import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_API}/products`)
  }

  getProduct(id:string) {
    return this.http.get<Product>(`${environment.url_API}/products/${id}`)
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${environment.url_API}/products`,product)
  }

  updateProduct(id:string, changes: Partial<Product>) {
    return this.http.put<Product>(`${environment.url_API}/products/${id}`, changes)
  }

  deleteProduct(id:string) {
    return this.http.delete(`${environment.url_API}/products/${id}`)
  }

}
