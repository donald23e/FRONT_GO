import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import { user } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { userLogin } from '../interfaces/user';
import { Router } from '@angular/router';
import { HttpResponse } from '@capacitor/core';
import { JwtModule } from "@auth0/angular-jwt";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // variables
nickname:string ='';
password:string ='';
  constructor(private toastController: ToastController,
    private _userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  // login click
  loginC(){
    // validate data
    if (this.nickname == '' || this.password == ''){
      this.toastController.create({
        header: 'Abvertencia',
        message: 'Todos los campos son obligatorios',
        duration: 4000,
        position: 'bottom'
    }).then((obj) => {
      obj.present();
    });
    return;
    }

     //created the body
    /* const User: userLogin = {
    nickname: this.nickname,
    password: this.password

    }*/
    const userLogin = new FormData();
    userLogin.append('nickname', this.nickname);
    userLogin.append('password', this.password);

    // open session
    this._userService.login(userLogin).subscribe({
      next: (data: any) => {
        const {token} = data;
        delete data.token;
        // console.log(data)
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/index'])

      },
      //error: (e: HttpResponse) =>{
      //  this.msjError(e);
      //}
    })
  }



}


