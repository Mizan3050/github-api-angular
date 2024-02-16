import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GithubProfile } from 'src/app/main/github-profile/interface/github-profile';

@Component({
  selector: 'app-github-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  username: string = '';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.username = this.route.snapshot.paramMap.get('username');
  }

  github$: Observable<GithubProfile> = of(null);

  ngOnInit() {
    this.github$ = this.http.get<GithubProfile>(`https://api.github.com/users/${this.username}`).pipe(
      catchError(() => {
        return of(null)
      })
    );
  }
}
