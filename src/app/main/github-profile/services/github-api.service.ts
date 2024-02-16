import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubProfile } from 'src/app/main/github-profile/interface/github-profile.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(
    private http: HttpClient
  ) { }

  getGithubProfile(username: string): Observable<GithubProfile>{
    return this.http.get<GithubProfile>(`https://api.github.com/users/${username}`)
  }
}
