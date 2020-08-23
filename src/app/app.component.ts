import {Component} from '@angular/core';
import {Book, GoogleBookService} from "./services/google-book.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: string = '';
  response: Book[];

  constructor(private http: GoogleBookService) {
  }

  search(query: string) {
    if (query) {
      console.log(query);
      this.http.search(query).subscribe(
        (data) => {
          console.log(data);
          this.response = data;
          console.log('fe', this.response);
        }, (eror) => {
          console.log(eror);
        }, () => {
          console.log('completed')
        }
      )
    } else{
      this.response = null;
    }
  }
}
