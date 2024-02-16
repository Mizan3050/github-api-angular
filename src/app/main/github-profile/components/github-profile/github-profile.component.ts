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
export class GithubProfileComponent{

  username: string = '';
  profileIcon = '/assets/images/icons/icons8-test-account-30.png'
  repoIcon = '/assets/images/icons/icons8-bookmark-48.png'

  constructor(
    private route: ActivatedRoute,
    private githubRepositoryService: GithubRepositoryService,
    private router: Router
  ) {
    this.username = this.route.snapshot.paramMap.get('username');
  }

  github$ = this.githubRepositoryService.githubProfile$;

  navigateToRepositoryList() {
    this.router.navigate([this.username, 'repositories'])
  }
}
