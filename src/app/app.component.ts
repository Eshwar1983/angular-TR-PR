import { Component, ViewEncapsulation } from '@angular/core'
/*import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  /*constructor(private http: Http) { }

    // array of all items to be paged
    items: Array<any>;

    // current page of items
    pageOfItems: Array<any>;

    ngOnInit() {
        // get dummy data
        this.http.get('./assets/data/dummy-data.json')
            .map((response: Response) => response.json())
            .subscribe(data => {
                // set items to json response
                this.items = data;
            });
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }*/
    title = 'app';
  toggleClass: boolean = false;

  constructor(){}

  ngOnInit() {
    console.log('Page loaded');
  }

  windowResize() {
    var w = window.outerWidth;
    console.log(w);
  }

  sidebarStatus($event) {
    this.toggleClass = $event;
  }

  wrpperClick() {
    this.toggleClass = false;
  }
}
