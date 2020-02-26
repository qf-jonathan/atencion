import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationItemComponent } from './preparation-item.component';

describe('PreparationItemComponent', () => {
  let component: PreparationItemComponent;
  let fixture: ComponentFixture<PreparationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
