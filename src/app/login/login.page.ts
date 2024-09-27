import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup,ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
//import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular/standalone';


import {IonicModule} from '@ionic/angular';
import { Router } from '@angular/router';

import {AnimationController,Animation} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPage  {

  loginForm!: FormGroup;

@ViewChild('logo', {read:ElementRef}) logo?:ElementRef<HTMLImageElement>;
@ViewChild('text', {read:ElementRef}) text?:ElementRef<HTMLImageElement>;

private logoAnimation!:Animation;
private textAnimation!:Animation;




  constructor(private fb:FormBuilder, private router:Router,animationCtrl:AnimationController) {

    this.loginForm=this.fb.group({

      username:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern('^[a-zA-Z0-9]*$')
        ]

      ],
      password:[
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern('^[0-9]*$')
        ]

      ]


    }) //Fin group

   } // Fin Constructor

   onLogin() {
    if(this.loginForm.valid){
      const username =this.loginForm.get('username')?.value;
      const password =this.loginForm.get('password')?.value;

      //this.router.navigate(['home'],{queryParams:{username, password} });
      this.router.navigate(['menu']);

    } else {
    console.error('Formulario no validos')
  }

}
}