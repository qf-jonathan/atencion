import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDirtyComponent } from './table-dirty.component';

describe('TableDirtyComponent', () => {
  let component: TableDirtyComponent;
  let fixture: ComponentFixture<TableDirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
