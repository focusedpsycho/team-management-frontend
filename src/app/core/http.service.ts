import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TeamMembersResponse, TeamMember } from '../team/team-member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  getAllTeamMembers(start: number, count: number): Observable<TeamMembersResponse> {
    let queryParams = new HttpParams();
    console.log(start, count);
    queryParams = queryParams.append('start', start.toString());
    queryParams = queryParams.append('count', count.toString());
    return this.httpClient.get<TeamMembersResponse>(environment.baseUrl + '/team/members/get-all', {
      params: queryParams,
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // ideally add it in an interceptor along with auth token if any
      })
    });
  }

  addTeamMember(teamMember: TeamMember): Observable<TeamMember> {
    return this.httpClient.post<TeamMember>(environment.baseUrl + '/team/members/add', teamMember, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // ideally add it in an interceptor along with auth token if any
      })
    });
  }

  updateTeamMember(teamMember: TeamMember): Observable<TeamMember> {
    return this.httpClient.put<TeamMember>(environment.baseUrl + '/team/members/edit', teamMember, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // ideally add it in an interceptor along with auth token if any
      })
    });
  }

  deleteTeamMember(memberId: string) {
    return this.httpClient.delete(environment.baseUrl + '/team/members/remove/' + memberId, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // ideally add it in an interceptor along with auth token if any
      })
    });
  }
}
