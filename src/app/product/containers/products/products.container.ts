import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainer implements OnInit {

  products: Product[] = [];
  product: Product;

  constructor(
    private productsService: ProductsService
  ) {  }

  ngOnInit() {
    this.fetchProducts()
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products
    } )
  }

  crearProduct(){
    const newProduct: Product = {
      id:'312',
      title:'nuevo producto',
      image:'',
      description:'este producto no tiene imagen',
      price:0
    }
    this.productsService.createProduct(newProduct).subscribe(product => {
      this.product = product
    })
  }

}
