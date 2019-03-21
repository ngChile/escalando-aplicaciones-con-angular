import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipFormComponent } from './scholarship-form.component';

describe('ScholarshipFormComponent', () => {
  let component: ScholarshipFormComponent;
  let fixture: ComponentFixture<ScholarshipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
