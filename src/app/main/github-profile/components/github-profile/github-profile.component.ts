import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { GithubProfile } from 'src/app/main/github-profile/interface/github-profile';
import { GithubRepositoryService } from 'src/app/main/github-profile/services/github-repository.service';

@Component({
  selector: 'app-github-profile',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  username: string = '';
  profileLoading = true;
  profileIcon = '/assets/images/icons/icons8-test-account-30.png'
  repoIcon = '/assets/images/icons/icons8-bookmark-48.png'

  constructor(
    private route: ActivatedRoute,
    private githubRepositoryService: GithubRepositoryService,
    private router: Router
  ) {
    this.username = this.route.snapshot.paramMap.get('username');
  }

  github$: Observable<GithubProfile> = of(null);

  ngOnInit() {
    this.github$ = this.githubRepositoryService.getGithubProfile(this.username).pipe(
      tap(() => {
        this.profileLoading = false;
      }),
      catchError(() => {
        this.profileLoading = false;
        return of(null)
      })
    );
  }

  navigateToRepositoryList() {
    this.router.navigate([this.username, 'repositories'])
  }
}
