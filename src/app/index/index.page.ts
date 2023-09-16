import { Component , OnInit, ViewChild, ElementRef,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode';
import { user } from '../interfaces/user';
// check custom

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage  {
  profileImageUrl: string | ArrayBuffer | null = null; // Add this property for the preview image URL
  @ViewChild('imageInput') imageInputRef!: ElementRef;
  idUser: number = 0;
  userLogg: any;

  constructor( private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.loadProfileImage();
  }

    async loadProfileImage() {
      const userLogg = this.userService.getUserFromLS();
      if (userLogg) {
        this.idUser = userLogg.id;
        this.profileImageUrl = await this.userService.getProfileImageUrl(userLogg.profileImage);
      }



  }

// image preview

getProfileImageUrl(nameImage: string): string {
  return this.userService.getProfileImageUrl(nameImage);
}

  SlidesOptions ={

    mainTeam: () => {
      // Function for mainTeam slide
      this.router.navigate(['/team-main']);
    },

    challengeClick: () => {
      // Function for challengeClick slide
      this.router.navigate(['/challenge-main']);
    },

    ticketClick: () => {
      // Function for ticketClick slide
      this.router.navigate(['/cupon']);
    }
  };





  }







