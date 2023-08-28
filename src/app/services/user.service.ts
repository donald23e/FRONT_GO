import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from '../interfaces/user';
import { Observable } from 'rxjs';
import { userLogin } from '../interfaces/user';
import jwt_decode from 'jwt-decode';
import { Team } from '../interfaces/team';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
// image load import from interfaces remember this is set on file interfaces


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    // posibility to change
    this.myApiUrl = 'api/usuarios';
   }
// sign in method
signIn(user:any):Observable<any>{
  return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user)

}
// login integration
login(user:FormData):Observable<String>{
  return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`,user)

}


getCurrentUserId(): number | null {
  const userId = localStorage.getItem('token'); // Replace 'userId' with the key you use to store the user ID
  return userId ? +userId : null; // Convert userId to a number and handle null case
}

getUserFromLS() {
  const user = localStorage.getItem('user');
  if (!user) {
    return null;
  }

  return JSON.parse(user);

}
 // Get all users
 /*getAllUsers(): Observable<user[]> {
  return this.http.get<{ ok: boolean, msg: string, data: user[] }>(`${this.myAppUrl}${this.myApiUrl}`)
    .pipe(map(response => response.data));
}*/


getAllUsersNotInTeam(): Observable<user[]> {
  return this.http.get<{ ok: boolean, msg: string, data: user[] }>(`${this.myAppUrl}${this.myApiUrl}/all`)
    .pipe(map(response => response.data));
}


searchUsersByNickname(query: string): Observable<user[]> {
  return this.getAllUsersNotInTeam().pipe(
    map(users => users.filter(user => user.nickname.toLowerCase().includes(query.toLowerCase())))
  );
}


// imageProfileView

getProfileImageUrl(nameImage: string): string {
  return `${this.myAppUrl}${this.myApiUrl}/profile-image/${nameImage}`;
}

getUserById(userId: number): Observable<user> {
  const url = `${this.myAppUrl}${this.myApiUrl}/${userId}`;
  return this.http.get<user>(url);
}

}

