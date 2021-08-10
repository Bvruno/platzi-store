import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {

  form: FormGroup
  id: string

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params.id
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product)
      })
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title:['',[Validators.required]],
      price:[Number,[Validators.required, MyValidators.isPriceValid]],
      image:'',
      description:['',[Validators.required]],
    })
  }

  updateProduct(event:Event){
    event.preventDefault()
    if(this.form.valid) {
      const product = this.form.value
      this.productsService.updateProduct(this.id,product).subscribe((newProduct) => {
        this.router.navigate(['./admin/products'])
      })
    }
    this.form.value
  }

  get priceField() {
    return this.form.get('price')
  }

}
