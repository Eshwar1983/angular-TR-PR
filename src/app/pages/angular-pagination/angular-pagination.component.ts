import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-angular-pagination',
  templateUrl: './angular-pagination.component.html',
  styleUrls: ['./angular-pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AngularPaginationComponent implements OnInit {

  constructor(private http: Http) { }
  @ViewChild('searchField', { static: false, }) nameField: ElementRef;
  
  // array of all items to be paged
  // itemsPerPage: { [string: id]: number; } = {};
  items: Array<any>;
  collection: Array<any>;
  p: number = 1;

  // current page of items
  pageOfItems: Array<any>;
  
  ngOnInit() {
    setTimeout(() => {
      //console.log(this.nameField.nativeElement);
      this.nameField.nativeElement.focus();
    }, 500);
    // get dummy data
    this.http.get('./assets/data/dummy-data.json')
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.items = data;
        this.collection = data;
      });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
