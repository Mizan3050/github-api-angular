import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':username',
    loadComponent: () => import('./main/github-profile/components/github-profile/github-profile.component').then(comp => comp.GithubProfileComponent),
  },
  {
    path: ':username/repositories',
    loadComponent: () => import('./main/github-profile/components/repositories/repositories.component').then(comp => comp.RepositoriesComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
