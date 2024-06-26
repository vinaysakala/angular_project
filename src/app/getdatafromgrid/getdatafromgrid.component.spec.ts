import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdatafromgridComponent } from './getdatafromgrid.component';

describe('GetdatafromgridComponent', () => {
  let component: GetdatafromgridComponent;
  let fixture: ComponentFixture<GetdatafromgridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetdatafromgridComponent]
    });
    fixture = TestBed.createComponent(GetdatafromgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
