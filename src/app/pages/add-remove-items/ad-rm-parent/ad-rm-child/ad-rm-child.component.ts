import { Component, OnInit } from '@angular/core';
export interface myinterface {
  remove(index: number);
}
@Component({
  selector: 'app-ad-rm-child',
  templateUrl: './ad-rm-child.component.html',
  styleUrls: ['./ad-rm-child.component.scss']
})
export class AdRmChildComponent implements OnInit {

  ngOnInit() {
  }

  public index: number;
  public selfRef: AdRmChildComponent;

  //interface for Parent-Child interaction
  public compInteraction: myinterface;

  constructor() {
  }

  removeMe(index) {
    this.compInteraction.remove(index)
  }

}