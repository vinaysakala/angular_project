import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiltiselectComponent } from './miltiselect.component';

describe('MiltiselectComponent', () => {
  let component: MiltiselectComponent;
  let fixture: ComponentFixture<MiltiselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiltiselectComponent]
    });
    fixture = TestBed.createComponent(MiltiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
