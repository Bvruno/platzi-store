import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true
  form: FormGroup

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {
      this.buildFrom()
     }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  loginUser(event:Event) {
    event.preventDefault()
    if(this.form.valid) {
      const value = this.form.value
      this.authService.login(value.email,value.password)
      .then(() => {
        this.router.navigate(['/admin'])
      })
      .catch(() => {
        alert('no es valido')
      })
    }
  }

  private buildFrom() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
    })
  }

}
