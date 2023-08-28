import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { TeamService } from '../services/team.service'; // Import the TeamService
import { Team } from '../interfaces/team'; // Import the Team interface
import { Router } from '@angular/router';
import { user } from '../interfaces/user';
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode'; // Import jwt-decode
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {
  id: 0;
  teamId:0;
  name: '';
  estatus: true;
  img: File;
  nombreCorto: '';
  elementByTeam: 0;
  userAdmin: '';
  idUser: number = 0;
  userLogg: any;
  profileImageUrl: string | ArrayBuffer | null = null; // Add this property for the preview image URL
  // Userid = localStorage.getItem("Userid");
  createdTeamId: number | null = null;
  createdTeamName: string | null = null;


  @ViewChild('imageInput') imageInputRef!: ElementRef;

  constructor(private teamService: TeamService, private userService:UserService, private router: Router,private toastController: ToastController) { }

// funtions logic
  ngOnInit() {
    // const userId = localStorage.getItem('Userid');
    this.userLogg = this.userService.getUserFromLS();
    console.log(this.userLogg);
    if (this.userLogg) {
      this.idUser = this.userLogg.id; // Convert the value to a number
      console.log(this.idUser)
    }


  }



  onImageSelected(e: any) {
    // Implement the image selection logic if needed
    this.img = e.target.files[0];



    // Generate a preview URL for the selected image
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImageUrl = reader.result;
    };
    reader.readAsDataURL(this.img);
  }
// registre
selectImage() {
  this.imageInputRef.nativeElement.click();
}


  registerTeam() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('imgTeam', this.img);


formData.append('idUser', this.idUser.toString());
    this.teamService.createTeam(formData).subscribe(
      (response) => {
        // Team registration successful, handle the response as needed
        console.log('Team registered successfully:', response);
        this.presentToast('Equipo creado correctamente', 'success');

        const idTeam = response.data.id;
        console.log(idTeam);
        this.router.navigate(['/team-register',idTeam]);
      },
      (error) => {
        // Handle any error that occurs during team registration
        console.error('Error registering team:', error);
        this.presentToast('Ya cuentas con un Equipo', 'danger');
      }

    );



  }


  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      cssClass: 'custom-toast'
    });
    toast.present();

}

}
