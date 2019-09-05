import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFetchAPIComponent } from './angular-fetch-api.component';

describe('AngularFetchAPIComponent', () => {
  let component: AngularFetchAPIComponent;
  let fixture: ComponentFixture<AngularFetchAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFetchAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFetchAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
