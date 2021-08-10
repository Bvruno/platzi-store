import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id)
    });
  }

  fetchProduct(id:string) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(id:string) {
    const updateProduct: Partial<Product> = {
      title:'nuevo producto EDITADO',
      description:'este producto no tiene imagen y fue editado',
      price:4234
    }
    this.productsService.updateProduct(id, updateProduct).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(id:string) {
    this.productsService.deleteProduct(id).subscribe(rta => {
      return rta
    })
  }

}
