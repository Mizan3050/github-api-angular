import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GithubProfile } from 'src/app/main/github-profile/interface/github-profile';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-github-profile',
  standalone: true,
  imports: [CommonModule,MatProgressSpinnerModule, RouterModule],
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  username: string = '';
  profileLoading = true;
  profileIcon='/assets/images/icons/icons8-test-account-30.png'
  repoIcon='/assets/images/icons/icons8-bookmark-48.png'

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.username = this.route.snapshot.paramMap.get('username');
  }

  github$: Observable<GithubProfile> = of(null);

  ngOnInit() {
    this.github$ = this.http.get<GithubProfile>(`https://api.github.com/users/${this.username}`).pipe(
      tap(() => {
        this.profileLoading = false;
      }),
      catchError(() => {
        this.profileLoading = false;
        return of(null)
      })
    );
  }
}
