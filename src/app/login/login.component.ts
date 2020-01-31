import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pfs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      loginControl: ['', Validators.required],
      passwordControl: [''],
    });
  }

  public submitLoginForm(): void {
    if (this.loginFormGroup.dirty && !!this.loginFormGroup.get('passwordControl').value) {
      sessionStorage.setItem('sessionLogin', this.loginFormGroup.get('loginControl').value);
      this.router.navigateByUrl('/features');
    }
  }

}
