import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRmParentComponent } from './ad-rm-parent.component';

describe('AdRmParentComponent', () => {
  let component: AdRmParentComponent;
  let fixture: ComponentFixture<AdRmParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRmParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRmParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
