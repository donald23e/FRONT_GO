import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../interfaces/team';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    // posibility to change
    this.myApiUrl = 'api/teams';
  }


  createTeam(data: FormData): Observable<any> {
    //return this.http.post<any>(`${this.myApiUrl}`, data);
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, data);
  }

  getTeamByUserId(userId: number): Observable<Team> {
    const url = `${this.myAppUrl}${this.myApiUrl}/team/${userId}`;
    return this.http.get<Team>(url);
  }
//  get members
  getTeamMembersByUserId(userId: number): Observable<any> {
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}/by-user/${userId}`); // Replace with your backend URL
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<{ ok: boolean, msg: string, data: Team[] }>(`${this.myAppUrl}${this.myApiUrl}`)
      .pipe(map(response => response.data));
  }
  // find by name

  searchTeamsByName(query: string): Observable<Team[]> {
    return this.getAllTeams().pipe(
      map(teams => teams.filter(teams => teams.name.toLowerCase().includes(query.toLowerCase())))
    );
  }

  // imageProfileView

getProfileImageUrlTeam(nameImage: string): string {
  return `${this.myAppUrl}${this.myApiUrl}/profile-image/${nameImage}`;
}


  // Add more TEAM methods here...


}
