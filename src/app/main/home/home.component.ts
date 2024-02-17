import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchControl = new FormControl('');
  private router = inject(Router);
  projectDescription = `With this project, users can effortlessly search for a GitHub profile and retrieve a detailed list of its repositories. The application leverages the GitHub API to provide real-time information on repositories, including their names, descriptions and stars.`;
  searchProfile() {
    if (this.searchControl.value) {
      this.router.navigate([this.searchControl.getRawValue()])
    }
  }
}
