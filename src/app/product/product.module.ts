import { NgModule } from '@angular/core';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsContainer } from './containers/products/products.container';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsContainer
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule {

}
