import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/main/page-not-found/page-not-found.component';
import { GithubProfileResolver } from 'src/app/main/github-profile/services/github-resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadComponent:()=>import('./main/home/home.component').then(comp => comp.HomeComponent)
  },
  {
    path: ':username',
    loadComponent: () => import('./main/github-profile/components/github-profile/github-profile.component').then(comp => comp.GithubProfileComponent),
  },
  {
    path: ':username/repositories',
    resolve: {
      githubProfile: GithubProfileResolver,
    },
    loadComponent: () => import('./main/github-profile/components/repositories/repositories.component').then(comp => comp.RepositoriesComponent)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
