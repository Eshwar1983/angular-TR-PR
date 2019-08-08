import { Component, OnInit } from '@angular/core';

export interface myinterface {
    remove(index: number);
}

@Component({
  selector: 'app-dynamic-add-child',
  template: `
    <button (click)="removeMe(index)">I am a Child component, click to Remove</button>
  `,
  styles: [
      `button {
        background-color: #4CAF50;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin-top: 5px;
      }`
  ]
})
export class dynamicAddComponent {

  public index: number;
  public selfRef: dynamicAddComponent;

  //interface for Parent-Child interaction
  public compInteraction: myinterface;

  constructor() {
  }

  removeMe(index) {
    this.compInteraction.remove(index)
  }

}