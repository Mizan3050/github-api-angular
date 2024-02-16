import { inject } from "@angular/core";
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { filter, first } from "rxjs";
import { GithubProfile } from "src/app/main/github-profile/interface/github-profile";
import { GithubRepositoryService } from "src/app/main/github-profile/services/github-repository.service";

export const GithubProfileResolver: ResolveFn<GithubProfile> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const githubRepositoryService = inject(GithubRepositoryService);
    const username = route.paramMap.get('username');
    return githubRepositoryService.getGithubProfile(username).pipe(
        filter(user => !!user.id),
        first()
    )
}