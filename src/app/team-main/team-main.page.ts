import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { user } from '../interfaces/user';
import { TeamMemberService } from '../services/team-member.service'; // Import the newly created service
import { UserService } from '../services/user.service';
import { TeamService } from '../services/team.service'; // Import the TeamService
import { Team } from '../interfaces/team'; // Import the Team interface
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-main',
  templateUrl: './team-main.page.html',
  styleUrls: ['./team-main.page.scss'],
})
export class TeamMainPage implements OnInit {
  userLogg: any;
  idUser: number = 0;
  members: any[] = [];
  profileImageUrl: string | ArrayBuffer | null = null; // Add this property for the preview image URL

  @ViewChild('imageInput') imageInputRef!: ElementRef;
  constructor(private TeamMemberService:TeamMemberService,private userService:UserService,private teamService: TeamService,private router: Router
    ) { }

  ngOnInit(){
     // const userId = localStorage.getItem('Userid');
     this.userLogg = this.userService.getUserFromLS();
     console.log(this.userLogg);
     if (this.userLogg) {
       this.idUser = this.userLogg.id; // Convert the value to a number

     }

     const userId = this.idUser
    this.teamService.getTeamMembersByUserId(userId).subscribe(

      response => {
        this.members = response.data; // Assuming the members data is inside the 'data' property
        console.log(response.data);
      },
      error => {
        console.error('Error fetching team members:', error);
      }
    );
  }

   // image preview

   getProfileImageUrl(nameImage: string): string {
    return this.userService.getProfileImageUrl(nameImage);
  }

}
