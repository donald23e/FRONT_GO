import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../interfaces/user'; // Import the User interface


@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    // posibility to change
    this.myApiUrl = 'api/members';
  }


  // Add member(s) to an existing team

  getAllMembers(): Observable<any> {
    return this.http.get<any>('${this.myAppUrl}${this.myApiUrl}'); // Replace with your backend URL
  }

  joinTeam(teamId: number) {
    const url = `${this.myAppUrl}${this.myApiUrl}`; // Adjust the URL accordingly
    const body = { idTeam: teamId, users: [/* array of users */] }; // Pass the array of users here
    return this.http.post(url, body);
  }

  addToTeam(requestData: any): Observable<any> {
    // Send the HTTP POST request to the backend API's 'addToTeam' endpoint
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, requestData);
  }
  // Get members of a specific team by team ID
  getTeamMembers(teamId: number): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/${teamId}`);
  }

  // Delete a member from a team by their member ID
  deleteMember(memberId: number): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${memberId}`);
  }
}
