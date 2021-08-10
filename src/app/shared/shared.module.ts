import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighligntDirective } from './directives/hinglight/highlignt.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExponentialPipe,
    HighligntDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
  ],
  exports: [
    ExponentialPipe,
    HighligntDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
