import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-api-angular';

  constructor(private http: HttpClient) {

  }
  github$: Observable<any> = this.http.get('https://api.github.com/users/mizan3050') as Observable<any>;
}
