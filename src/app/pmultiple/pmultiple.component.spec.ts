import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmultipleComponent } from './pmultiple.component';

describe('PmultipleComponent', () => {
  let component: PmultipleComponent;
  let fixture: ComponentFixture<PmultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmultipleComponent]
    });
    fixture = TestBed.createComponent(PmultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
