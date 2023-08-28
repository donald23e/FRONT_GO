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
  selector: 'app-team-register',
  templateUrl: './team-register.page.html',
  styleUrls: ['./team-register.page.scss'],
  // Ng2SearchPipeModule
})
export class TeamRegisterPage implements OnInit {


  users: any[] = [];
  desde = 0;
  limit = 10;
  profileImageUrl: string | ArrayBuffer | null = null; // Add this property for the preview image URL

   // Search result and selected members arrays

   TeamId: number = 0;
   idUser: number = 0;
   teamMembers: user[] = [];
   searchResults: user[] = [];
   userLogg: any;
   searchQuery: string = '';
   allUsers: user[] = [];

   @ViewChild('imageInput') imageInputRef!: ElementRef;
  constructor(private route: ActivatedRoute,private teamService: TeamService, private userService: UserService, private router: Router,
     private TeamMemberService:TeamMemberService,private toastController: ToastController) { }

  ngOnInit() {

    const idTeam = this.route.snapshot.paramMap.get('id');
    if (idTeam) {
      this.TeamId = +idTeam;
    } else {
      // Handle the case when 'id' parameter is not available
      console.error('ID parameter not found in the URL');
      // For example, you can show an error message to the user or navigate back
      // to the previous page using this.router.navigate(['/previous-page']);
    }

    console.log(idTeam);
    console.log(this.TeamId);
    // this.userService.getAllUsers().subscribe(
      // (users) => {
       //  console.log('Users:', users);
        // You can also assign the users to any component property if needed, like:
        // this.allUsers = users;
     //  },
     //  (error) => {
     //    console.error('Error fetching users:', error);
     //  }
   //  );


// all users

this.userService.getAllUsersNotInTeam().subscribe(
  (users) => {
    this.allUsers = users;
    console.log(users);
  },
  (error) => {
    console.error('Error fetching users:', error);
  }
);

  }

  // image preview

  getProfileImageUrl(nameImage: string): string {
    return this.userService.getProfileImageUrl(nameImage);
  }
  // search
  onSearch(event: any) {
    const query = event.detail.value.trim();
    if (query) {
      this.searchQuery = query;

      this.userService.searchUsersByNickname(query).subscribe(
        (filteredUsers) => {
          this.searchResults = filteredUsers;
        },
        (error) => {
          console.error('Error searching users:', error);
          this.presentToast('No extiste el Usuario', 'danger');
        }
      );
    } else {
      this.searchResults = [];
    }
  }

  addToBox(userId:any) {
    const selectedUser = this.searchResults.find((user) => user.id === userId);
    if (selectedUser && !this.teamMembers.includes(selectedUser)) {
      this.teamMembers.push(selectedUser);

  }
}


  addToTeam() {

    const requestData = {
      members:{
        idTeam: this.TeamId,
        users: this.teamMembers.map(member => ({ id: member.id }))
      }

    };
 console.log(requestData);
    this.TeamMemberService.addToTeam(requestData).subscribe(
      (response) => {
        // Handle the success response
        console.log('Response:', response);
        this.presentToast('Equipo registrado correctamente', 'success');
        // For example, you can navigate to another page after adding the members
        this.router.navigate(['/team-main']);
      },
      (error) => {
        // Handle the error response
        console.error('Error:', error);
        this.presentToast('Error toma en cuenta que el equipo debe de estar conformado por ti y 4 integrantes mas y que los usuarios no pertenezcan a otro equipo', 'Danger');
        // For example, you can show an error message to the user
      }
      );

  }

  removeFromBox(userId: any) {
    const userIndex = this.teamMembers.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      this.teamMembers.splice(userIndex, 1);
    }


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




