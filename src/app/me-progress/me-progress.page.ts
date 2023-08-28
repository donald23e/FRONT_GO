import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../interfaces/team';
import { Router,ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';
import { Health } from '@awesome-cordova-plugins/health/ngx';
import jwt_decode from 'jwt-decode';
import { user } from '../interfaces/user';
import { TeamMemberService } from '../services/team-member.service'; // Import the newly created service



@Component({
  selector: 'app-me-progress',
  templateUrl: './me-progress.page.html',
  styleUrls: ['./me-progress.page.scss'],
})
export class MeProgressPage implements OnInit {
  userLogg: user | null = null;
  idUser: number = 0;
  name: string; // To store the user's name
  profileImage: string ; // Add this property for the preview image URL // To store the profile image URL



  constructor(private route: ActivatedRoute,private teamService: TeamService, private userService: UserService, private router: Router,
    private TeamMemberService:TeamMemberService,private health: Health) { }

  ngOnInit() {

       // const userId = localStorage.getItem('Userid');
   this.userLogg = this.userService.getUserFromLS();
   console.log(this.userLogg);
   if (this.userLogg) {
     this.idUser = this.userLogg.id; // Convert the value to a number
     console.log(this.idUser)
   }
    // Fetch user data from the service
    if (this.idUser !== 0){this.userService.getUserById(this.idUser).subscribe(
      (user) => {
        this.name = user.name;
        this.profileImage = user.profileImage;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }

    );
  }
  this.health.isAvailable()
  .then((available:boolean) => {
    console.log(available);
    this.health.requestAuthorization([
      'distance', 'nutrition',  //read and write permissions
      {
        read: ['steps'],       //read only permission
        write: ['height', 'weight']  //write only permission
      }
    ])
    .then(res => console.log(res))
    .catch(e => console.log(e));
  })
  .catch(e => console.log(e));

  }



  // Function to construct the profile image URL
  getProfileImageUrl(imageName: string): string {
    return `${this.userService.getProfileImageUrl(imageName)}`;
  }
}
