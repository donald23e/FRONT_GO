import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-advice',
  templateUrl: './advice.page.html',
  styleUrls: ['./advice.page.scss'],
})
export class AdvicePage implements OnInit {
  userLogg: any;
  idUser: number = 0;
  name: string; // To store the user's name
  constructor(private route: ActivatedRoute,private router: Router, private userService: UserService) { }

  ngOnInit() {

       // const userId = localStorage.getItem('Userid');
   this.userLogg = this.userService.getUserFromLS();
   console.log(this.userLogg);
   if (this.userLogg) {
     this.idUser = this.userLogg.id; // Convert the value to a number
     console.log(this.idUser )
   }
  }

sendData(){
  const user = this.idUser
  this.router.navigate(['/me-progress',user]);
}
}


