import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildFrom()
   }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(10)
  ])

  registerUser(event:Event){
    event.preventDefault()
    if(this.form.valid){
      const value = this.form.value
      if (value.password === value.password2) {
        this.authService.createUser(value.email,value.password)
        .then(() => {
          this.router.navigate(['/auth/login'])
        })
      } else {
        this.passwordFormControl.invalid
      }

    }
  }

  private buildFrom(){
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      password2: ['',[Validators.required]]
    })
  }

  get passwordField() {
    return this.form.get('password')
  }

}
