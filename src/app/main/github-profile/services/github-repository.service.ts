import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { GithubProfile } from 'src/app/main/github-profile/interface/github-profile';
import { GithubApiService } from './github-api.service'

@Injectable({
  providedIn: 'root'
})
export class GithubRepositoryService {

  private githubProfile = new BehaviorSubject<GithubProfile>(null);
  githubProfile$ = this.githubProfile.asObservable();

  constructor(
    private githubApiService: GithubApiService,
    private http: HttpClient
  ) { }

  getGithubProfile(username: string): Observable<GithubProfile> {
    return this.githubApiService.getGithubProfile(username).pipe(
      tap((githubProfile) => {
        if (githubProfile) {
          this.githubProfile.next(githubProfile);
        }
      })
    );
  }

  getListOfRepositories(): Observable<any> {
    return this.http.get<any>(this.githubProfile.value?.repos_url)
  }
}