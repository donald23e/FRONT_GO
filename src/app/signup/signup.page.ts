import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {ToastController} from '@ionic/angular';
import { user } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name: string = '';
  nickname: string = '';
  correo: string = '';
  password: string = '';
  confirmPassword: string = '';
  profileImage: File;

  profileImageUrl: string | ArrayBuffer | null = null; // Add this property for the preview image URL

  @ViewChild('imageInput') imageInputRef!: ElementRef;
  // constructor


  constructor(public toastController: ToastController,
    private _userService: UserService,
    private router: Router) { }

  ngOnInit() {}


  cambiarImagen(e: any) {
    this.profileImage = e.target.files[0];



    // Generate a preview URL for the selected image
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImageUrl = reader.result;
    };
    reader.readAsDataURL(this.profileImage);
  }
  selectImage() {
    this.imageInputRef.nativeElement.click();
  }


  addUser(){
 // validate if the user fill the form || = O this.variable alert= mensaje
 if (this.name == '' ||
 this.nickname == '' ||
 this.correo == '' ||
 this.password == '' ||
 this.confirmPassword == '') {
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
// validate if the password are equals
if (this.password != this.confirmPassword) {
  this.toastController.create({
    header: 'Abvertencia',
    message: 'Las passwords ingresadas son distintas',
    duration: 4000,
    position: 'bottom'
}).then((obj) => {
  obj.present();
});
return;
// load image
}
if (!this.profileImage) {
  this.toastController.create({
    header: 'Abvertencia',
    message: 'Ingrese la imagen de perfil',
    duration: 4000,
    position: 'top',
}).then((obj) => {
  obj.present();
});
  return;
}



// create object correction
//console.log( this.profileImage)
/*const User: user = {
  name: this.name,
  nickname: this.nickname,
  correo: this.correo,
  password:this.password,
  profileImage: this.profileImage
};*/

const User = new FormData();
User.append('name', this.name);
User.append('nickname', this.nickname);
User.append('correo', this.correo);
User.append('password', this.password);
User.append('profileImage', this.profileImage);
// service request
this._userService.signIn(User).subscribe(data => {
  this.toastController.create({
    header: 'Abvertencia',
    message: 'El usuario de ha registrado con exito',
    duration: 4000,
    position: 'top',
}).then((obj) => {
  obj.present();
});
 this.router.navigate(['/login']);

})
 }
  }

