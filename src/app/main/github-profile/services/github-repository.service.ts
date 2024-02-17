import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { PAGE_SIZE } from 'src/app/main/github-profile/constants/page-size.constant';
import { GithubProfile } from 'src/app/main/github-profile/interface/github-profile.interface';
import { Repository } from 'src/app/main/github-profile/interface/repository.interface';
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
    if (username === this.githubProfile.value?.login) {
      return this.githubProfile$
    } else {
      return this.githubApiService.getGithubProfile(username).pipe(
        tap((githubProfile) => {
          if (githubProfile) {
            this.githubProfile.next(githubProfile);
          }
        }),
        catchError((error) => {
          return of(new Error(error) as any);
        })
      );
    }
  }

  getListOfRepositories(pageIndex: number): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.githubProfile.value?.repos_url, {
      params: new HttpParams()
      .set('per_page', PAGE_SIZE.toString())
      .set('page', pageIndex.toString())
    })
  }
}
