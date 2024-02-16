import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { GithubRepositoryService } from 'src/app/main/github-profile/services/github-repository.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {

  githubProfile$ = this.githubRepositoryService.githubProfile$;
  startIcon = '/assets/images/icons/icons8-star-48.png'
  repositoriesLoading = true;

  constructor(
    private githubRepositoryService: GithubRepositoryService
  ) {

  }

  githubRepositories$ = this.githubRepositoryService.getListOfRepositories().pipe(
    tap(() => {
      this.repositoriesLoading = false;
    }),
    catchError(() => {
      this.repositoriesLoading = false;
      return of([])
    })
  );
}
