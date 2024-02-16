import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {

  constructor(
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.paramMap.get('username'));
  }
}
