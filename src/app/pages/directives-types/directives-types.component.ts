import { Component, OnInit } from '@angular/core';
import { HostDirectiveService } from '../../service/host-directive.service';

@Component({
  selector: 'app-directives-types',
  templateUrl: './directives-types.component.html',
  styleUrls: ['./directives-types.component.scss']
})
export class DirectivesTypesComponent implements OnInit {

  title: string = 'ngSwitch Example';
  num: number;

  items: item[] = [{ name: 'One', val: 1 }, { name: 'Two', val: 2 }, { name: 'Three', val: 3 }];
  selectedValue: string = 'One';
  toDate: Date = new Date();
  celcius: number;
  Fahrenheit: number;
  cur: number= 175;

  constructor() { }

  ngOnInit() {
  }

}

class item {
  name: string;
  val: number;
}
