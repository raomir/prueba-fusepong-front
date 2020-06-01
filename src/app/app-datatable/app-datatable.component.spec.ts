import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDatatableComponent } from './app-datatable.component';

describe('AppDatatableComponent', () => {
  let component: AppDatatableComponent;
  let fixture: ComponentFixture<AppDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
