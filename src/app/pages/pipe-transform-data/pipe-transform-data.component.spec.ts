import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTransformDataComponent } from './pipe-transform-data.component';

describe('PipeTransformDataComponent', () => {
  let component: PipeTransformDataComponent;
  let fixture: ComponentFixture<PipeTransformDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeTransformDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeTransformDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
