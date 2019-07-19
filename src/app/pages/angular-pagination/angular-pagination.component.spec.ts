import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPaginationComponent } from './angular-pagination.component';

describe('AngularPaginationComponent', () => {
  let component: AngularPaginationComponent;
  let fixture: ComponentFixture<AngularPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
