import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pfs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      loginControl: [''],
      passwordControl: [''],
    });
  }

  public submitLoginForm(): void {
    if (this.loginFormGroup.dirty && !!this.loginFormGroup.get('passwordControl').value) {
      sessionStorage.setItem('login', this.loginFormGroup.get('loginControl').value);
    }
  }

}
