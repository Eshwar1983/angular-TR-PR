import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveItemsComponent } from './add-remove-items.component';

describe('AddRemoveItemsComponent', () => {
  let component: AddRemoveItemsComponent;
  let fixture: ComponentFixture<AddRemoveItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
