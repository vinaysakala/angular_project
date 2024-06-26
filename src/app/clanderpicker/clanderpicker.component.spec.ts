import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanderpickerComponent } from './clanderpicker.component';

describe('ClanderpickerComponent', () => {
  let component: ClanderpickerComponent;
  let fixture: ComponentFixture<ClanderpickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClanderpickerComponent]
    });
    fixture = TestBed.createComponent(ClanderpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
