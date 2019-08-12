import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-transform-data',
  templateUrl: './pipe-transform-data.component.html',
  styleUrls: ['./pipe-transform-data.component.scss']
})
export class PipeTransformDataComponent implements OnInit {

  title = 'my-first-app';  
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  constructor() { }

  ngOnInit() {
  }

}
