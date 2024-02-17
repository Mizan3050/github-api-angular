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

  searchProfile() {
    if (this.searchControl.value) {
      this.router.navigate([this.searchControl.getRawValue()])
    }
  }
}
