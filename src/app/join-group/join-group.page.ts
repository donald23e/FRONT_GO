import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../interfaces/team';
import { Router,ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode';
import { user } from '../interfaces/user';
import { TeamMemberService } from '../services/team-member.service'; // Import the newly created service
import {ToastController} from '@ionic/angular';



@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.page.html',
  styleUrls: ['./join-group.page.scss'],
})
export class JoinGroupPage implements OnInit {

  teams: Team[] = [];
  userLogg: any;
  idUser: number = 0;
  searchResults: Team[] = [];
  searchQuery: string = '';
  profileImageUrl: string | ArrayBuffer; // Add this property for the preview image URL
  TeamId: number = 0;
  teamMembers: user[] = [];

  constructor(private route: ActivatedRoute,private teamService: TeamService, private userService: UserService, private router: Router,
    private TeamMemberService:TeamMemberService,private toastController: ToastController) { }

  ngOnInit() {

    this.teamService.getAllTeams().subscribe(
      (teams: Team[]) => {
        this.teams = teams;
        console.log('Teams:', teams);
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );

      // const userId = localStorage.getItem('Userid');
   this.userLogg = this.userService.getUserFromLS();
   console.log(this.userLogg);
   if (this.userLogg) {
     this.idUser = this.userLogg.id; // Convert the value to a number
     console.log(this.idUser )
   }
  }


onSearch(event:any){
  const query = event.detail.value.trim();
  if (query) {
    this.searchQuery = query;

    this.teamService.searchTeamsByName(query).subscribe(
      (filteredUsers) => {
        this.searchResults = filteredUsers;
      },
      (error) => {
        console.error('Error searching users:', error);
      }
    );
  } else {
    this.searchResults = [];
  }
}
 getProfileImageUrlTeam(nameImage: string): string {
    return this.teamService.getProfileImageUrlTeam(nameImage);
  }

  addToTeam(team: Team) {



    const requestData = {
      members:{
        idTeam: team.id,
        users: [{ id: this.idUser }]
      }

    };
    console.log(requestData);
    this.TeamMemberService.addToTeam(requestData).subscribe(
      (response) => {
        console.log('User added to team:', response);
        this.presentToast('Usuario agregado exitosamente', 'success');
        // Optionally, you can update the UI or show a success message
      },
      (error) => {
        console.error('Error adding user to team:', error);
        // Optionally, you can show an error message
        this.presentToast('Error.El usuario ya pernetece a un equipo o el Equipo que intenta entrar esta completo', 'danger');
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
