# GithubApiAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# GitHub Insights

GitHub Insights is an Angular project that allows users to search for GitHub profiles, access profiles through URL parameters directly, and retrieve a list of repositories associated with a specific GitHub profile.

## Features

### 1. Profile Search

Easily search for GitHub profiles by entering the username in the search bar on the home page. The application leverages the GitHub API to provide real-time information.

### 2. Direct Profile Access via URL Params

Access a GitHub profile directly through URL parameters. Simply append the GitHub username to the URL, and the application will load the corresponding profile information.

### 3. Repository List

See the list of all the open repositories by the owner of the respective github profile by clicking on 'Repositories' card on the profile detail page.
After redirecting to the repository list page, you can directly view the repository by clicking on the repository card.

Example:
https://github-api-angular-meezan.netlify.app/mizan3050


Certainly! Below is a sample README.md file for your Angular project with the mentioned features:

markdown
Copy code
# GitHub Profile Explorer

GitHub Profile Explorer is an Angular project that allows users to search for GitHub profiles, access profiles through URL parameters directly, and retrieve a list of repositories associated with a specific GitHub profile.

## Features

### 1. Profile Search

Easily search for GitHub profiles by entering the username in the search bar. The application leverages the GitHub API to provide real-time information.

### 2. Direct Profile Access via URL Params

Access a GitHub profile directly through URL parameters. Simply append the GitHub username to the URL, and the application will load the corresponding profile information.

Example:
```bash
https://your-app-url.com/profile/{github-username}
3. Repository List
Retrieve a detailed list of repositories associated with the selected GitHub profile. The list includes essential information such as repository name, description, star count, fork count, and the last update timestamp.

Getting Started
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/github-profile-explorer.git
cd github-profile-explorer
Install dependencies:
bash
Copy code
npm install
Run the application:
bash
Copy code
ng serve
Open your browser and navigate to http://localhost:4200/ to use the GitHub Profile Explorer.
Usage
Use the search bar to find GitHub profiles.
Directly access a profile by appending the GitHub username to the URL.
Explore the detailed repository list associated with the selected GitHub profile.
Technologies Used
Angular
GitHub API
