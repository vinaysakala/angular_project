import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcomponentComponent } from './gridcomponent.component';

describe('GridcomponentComponent', () => {
  let component: GridcomponentComponent;
  let fixture: ComponentFixture<GridcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridcomponentComponent]
    });
    fixture = TestBed.createComponent(GridcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
