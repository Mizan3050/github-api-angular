import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GithubRepositoryService } from 'src/app/main/github-profile/services/github-repository.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {

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
