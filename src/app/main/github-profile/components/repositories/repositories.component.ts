import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GithubRepositoryService } from 'src/app/main/github-profile/services/github-repository.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {

  githubProfile$ = this.githubRepositoryService.githubProfile$;
  startIcon = '/assets/images/icons/icons8-star-48.png'

  constructor(
    private githubRepositoryService: GithubRepositoryService
  ) {

  }

  githubRepositories$ = this.githubRepositoryService.getListOfRepositories().pipe(
    catchError(() => {
      return of([])
    })
  );
}
