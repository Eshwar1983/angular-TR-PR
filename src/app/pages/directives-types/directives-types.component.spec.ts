import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesTypesComponent } from './directives-types.component';

describe('DirectivesTypesComponent', () => {
  let component: DirectivesTypesComponent;
  let fixture: ComponentFixture<DirectivesTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
