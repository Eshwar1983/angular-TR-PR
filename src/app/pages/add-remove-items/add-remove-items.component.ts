import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { dynamicAddRemove } from '../dynamic-add-remove/dynamic-add-remove.component';

@Component({
  selector: 'app-add-remove-items',
  templateUrl: './add-remove-items.component.html',
  styleUrls: ['./add-remove-items.component.scss']
})
export class AddRemoveItemsComponent implements OnInit {

  contactList;
  txtName;

  constructor() { }

  @ViewChild('enterText', { static: false, }) nameField: ElementRef;
  ngOnInit() {
    this.contactList = [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'Angular' }
    ]
  }

  /*isSpacesOnly = function (field) {
    let r = field.value.replace(/\s/g, "")
    return (r.length == 0)
  }*/

  addContact() {
    //if(this.isSpacesOnly(this)){
      this.contactList.push(
        { name: this.txtName }
      )
    //}
    this.nameField.nativeElement.value = "";
  }

  deleteContact(name) {
    for (let i = 0; i < this.contactList.length; i++) {
      if(this.contactList[i]["name"] == name) {
        this.contactList.splice(i, 1);
      }
    }
  }

}
