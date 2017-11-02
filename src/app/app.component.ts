import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    //  alert(JSON.stringify(this.searchTerm$));
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        
        this.results = results.results;
        alert(JSON.stringify(results) );
      });
  }
}