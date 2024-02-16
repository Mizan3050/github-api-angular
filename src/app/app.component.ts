import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-api-angular';

  constructor(private http: HttpClient) {

  }
  github$ = this.http.get('https://api.github.com/users/someone')
}
