import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-angular-pagination',
  templateUrl: './angular-pagination.component.html',
  styleUrls: ['./angular-pagination.component.scss']
})
export class AngularPaginationComponent implements OnInit {

  constructor(private http: Http) { }

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
  }

}
