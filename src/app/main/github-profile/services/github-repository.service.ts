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
    private githubApiService: GithubApiService
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
}
