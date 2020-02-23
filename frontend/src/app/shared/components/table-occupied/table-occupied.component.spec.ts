import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOccupiedComponent } from './table-occupied.component';

describe('TableOcupiedComponent', () => {
  let component: TableOccupiedComponent;
  let fixture: ComponentFixture<TableOccupiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOccupiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOccupiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
