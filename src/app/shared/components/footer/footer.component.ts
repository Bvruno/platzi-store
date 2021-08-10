import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl
  matcher = new MyErrorStateMatcher()

  constructor() {
    this.emailField = new FormControl('',[
      Validators.required,
      Validators.email
    ])
  }

  ngOnInit(): void {
  }

  sendMail() {
    if (this.emailField.valid) {

    }
  }

}
