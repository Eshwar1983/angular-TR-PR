import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-remove-items',
  templateUrl: './add-remove-items.component.html',
  styleUrls: ['./add-remove-items.component.scss']
})
export class AddRemoveItemsComponent implements OnInit {

  contactList;
  txtName;
  addForm : FormGroup;

  constructor(fb: FormBuilder) {
    this.addForm = fb.group({
      'name' : [null, Validators.required]
    });
  }

  @ViewChild('enterText', { static: false, }) nameField: ElementRef;
  ngOnInit() {
    this.contactList = [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'Angular' }
    ]
  }

  addContact(value: any) {
    this.contactList.push(
      { name: this.txtName }
    )
    this.addForm.reset();
  }

  deleteContact(name) {
    for (let i = 0; i < this.contactList.length; i++) {
      if(this.contactList[i]["name"] == name) {
        this.contactList.splice(i, 1);
      }
    }
  }

}
