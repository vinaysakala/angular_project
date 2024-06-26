import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalookupComponent } from './datalookup.component';

describe('DatalookupComponent', () => {
  let component: DatalookupComponent;
  let fixture: ComponentFixture<DatalookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatalookupComponent]
    });
    fixture = TestBed.createComponent(DatalookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
