import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddocumentComponent } from './griddocument.component';

describe('GriddocumentComponent', () => {
  let component: GriddocumentComponent;
  let fixture: ComponentFixture<GriddocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GriddocumentComponent]
    });
    fixture = TestBed.createComponent(GriddocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
