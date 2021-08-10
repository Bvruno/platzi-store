import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products
    })
  }

  editProduct(product:Partial<Product>){}

  deleteProduct(id:string){
    this.productsService.deleteProduct(id).subscribe(rta => {
      if (rta) {
        this.products = this.products.filter(product =>
          product.id !== id)
      } else {
        console.error('no se pudo eliminar el producto')
      }
    })
  }

}
