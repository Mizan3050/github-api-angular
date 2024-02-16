import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, catchError, merge, Observable, of, switchMap, tap } from 'rxjs';
import { GithubRepositoryService } from 'src/app/main/github-profile/services/github-repository.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PAGE_SIZE } from 'src/app/main/github-profile/constants/page-size.constant';
import { Repository } from 'src/app/main/github-profile/interface/repository.interface';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {

  repositoryCount = 0;
  githubProfile$ = this.githubRepositoryService.githubProfile$.pipe(
    tap((profile) => {
      if (profile) {
        this.repositoryCount = profile.public_repos;
      }
    })
  );
  startIcon = '/assets/images/icons/icons8-star-48.png'
  repositoriesLoading = true;
  PAGE_SIZE = PAGE_SIZE;
  pageIndex = new BehaviorSubject<number>(1);

  constructor(
    private githubRepositoryService: GithubRepositoryService
  ) {

  }

  githubRepositories$: Observable<Repository[]> = merge(this.pageIndex.asObservable()).pipe(
    switchMap((pageIndex) => {
      console.log(pageIndex);
      return this.githubRepositoryService.getListOfRepositories(pageIndex).pipe(
        tap(() => {
          this.repositoriesLoading = false;
        }),
        catchError(() => {
          this.repositoriesLoading = false;
          return of([])
        })
      );
    })
  )

  nextPage() {
    if ((this.pageIndex.value + 1) * PAGE_SIZE <= this.repositoryCount) {
      this.pageIndex.next(this.pageIndex.value + 1);
    }
  }

  previousPage() {
    if ((this.pageIndex.value - 1) * PAGE_SIZE >= 0) {
      this.pageIndex.next(this.pageIndex.value - 1);
    }
  }
}
