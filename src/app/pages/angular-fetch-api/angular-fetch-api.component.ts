import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-angular-fetch-api',
  templateUrl: './angular-fetch-api.component.html',
  styleUrls: ['./angular-fetch-api.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AngularFetchAPIComponent implements OnInit {

  constructor(private http: Http) { }

  selectedValue
  collection: Array<any>;
  pageOfItems: Array<any>;
  p: number = 1;
  information: any;
  selectValue = [5,10,15,25,50,75,100];

  ngOnInit() {
    this.http.get('./assets/data/randomuser.json')
    //this.http.get('https://randomuser.me/api/?results=5000')
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.collection = data.results;
        this.information = data.info;
        console.log(data.info);
      });
      this.selectedValue = 5;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  displayModule(event){
    let targetEle = event.target.closest('a');
    console.log(targetEle);
  }

}
