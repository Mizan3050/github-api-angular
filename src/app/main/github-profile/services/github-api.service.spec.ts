import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubApiService } from './github-api.service';
import { GithubProfile } from 'src/app/main/github-profile/interface/github-profile.interface';

describe('GithubApiService', () => {
  let service: GithubApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubApiService]
    });

    service = TestBed.inject(GithubApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a GitHub profile when calling getGithubProfile', (done: DoneFn) => {
    const mockUsername = 'exampleUser';
    const mockProfile: GithubProfile = {
      // Your mock profile data here
      login: "Mizan3050",
      id: 43161459,
      node_id: "MDQ6VXNlcjQzMTYxNDU5",
      avatar_url: "https://avatars.githubusercontent.com/u/43161459?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Mizan3050",
      html_url: "https://github.com/Mizan3050",
      followers_url: "https://api.github.com/users/Mizan3050/followers",
      following_url: "https://api.github.com/users/Mizan3050/following{/other_user}",
      gists_url: "https://api.github.com/users/Mizan3050/gists{/gist_id}",
      starred_url: "https://api.github.com/users/Mizan3050/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Mizan3050/subscriptions",
      organizations_url: "https://api.github.com/users/Mizan3050/orgs",
      repos_url: "https://api.github.com/users/Mizan3050/repos",
      events_url: "https://api.github.com/users/Mizan3050/events{/privacy}",
      received_events_url: "https://api.github.com/users/Mizan3050/received_events",
      type: "User",
      site_admin: false,
      name: "Meezan Shaikh",
      company: null,
      blog: "",
      location: null,
      email: null,
      hireable: null,
      bio: "Frontend developer, with expertise in Angular",
      twitter_username: null,
      public_repos: 29,
      public_gists: 0,
      followers: 3,
      following: 3,
      created_at: "2018-09-11T03:50:40Z",
      updated_at: "2024-02-16T12:04:56Z"
    };

    service.getGithubProfile(mockUsername).subscribe((profile: GithubProfile) => {
      expect(profile).toEqual(mockProfile);
      done();
    });

    const request = httpMock.expectOne(`https://api.github.com/users/${mockUsername}`);
    expect(request.request.method).toBe('GET');

    // Respond with mock data
    request.flush(mockProfile);
  });

});
