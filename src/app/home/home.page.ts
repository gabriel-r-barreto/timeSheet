import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  profileForm: FormGroup;
  user: any;
  password: any;

  constructor(private loginService: LoginService, private router: Router) { }


  ngOnInit() {
    this.buildFormLogin()
  }

  buildFormLogin() {
    this.profileForm = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }


  login() {

    let obj = {
      userID: this.user,

      accessKey: this.password,
      grantType: "password"

    }

    this.loginService.login(obj).subscribe(result => {

      //@ts-ignore
      if (result.accessToken) {
        //@ts-ignore
        this.loginService.result = result.accessToken
        //@ts-ignore
        this.loginService.name = result.name
        this.router.navigate(['/spot']);
      }



    })

  }

}
