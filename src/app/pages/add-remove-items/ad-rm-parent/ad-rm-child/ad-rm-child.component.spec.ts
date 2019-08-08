import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRmChildComponent } from './ad-rm-child.component';

describe('AdRmChildComponent', () => {
  let component: AdRmChildComponent;
  let fixture: ComponentFixture<AdRmChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRmChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRmChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
