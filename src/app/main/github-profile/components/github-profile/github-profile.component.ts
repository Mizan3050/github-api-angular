import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { GithubProfile } from 'src/app/main/github-profile/interface/github-profile.interface';
import { GithubRepositoryService } from 'src/app/main/github-profile/services/github-repository.service';

@Component({
  selector: 'app-github-profile',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatSnackBarModule],
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  username: string = '';
  profileIcon = '/assets/images/icons/icons8-test-account-30.png'
  repoIcon = '/assets/images/icons/icons8-bookmark-48.png'
  profileLoading = true;
  profileExist = false;

  constructor(
    private route: ActivatedRoute,
    private githubRepositoryService: GithubRepositoryService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.username = this.route.snapshot.paramMap.get('username');
  }

  github$: Observable<GithubProfile> = of(null);

  ngOnInit() {
    this.github$ = this.githubRepositoryService.getGithubProfile(this.username).pipe(
      tap((profile) => {
        this.profileLoading = false;
        if (profile?.id) {
          this.profileExist = true;
        }
      }),
      catchError((e) => {
        this.profileLoading = false;
        this.profileExist = false;
        this.snackBar.open('Failed to load the profile', 'x')
        return of(null);
      })
    );
  }

  navigateToRepositoryList() {
    this.router.navigate([this.username, 'repositories'])
  }
}
