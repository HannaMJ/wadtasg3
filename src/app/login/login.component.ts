import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

user = {
   email: 'raihana.moksin@gmail.com',
   password: '123456789'
};

  constructor(private formBuilder: FormBuilder,
  			  private authService: AuthService,
  			  private router: Router,
          private angularAuth: AngularFireAuth) { 
  	
  }

signInWithEmail() {
   this.authService.signIn(this.user.email, this.user.password)
      .then((res) => {
         console.log(res);  
         this.router.navigate(['/groups']);
      })
      .catch((err) => console.log('error: ' + err));
}

  ngOnInit() {
  }

}

  