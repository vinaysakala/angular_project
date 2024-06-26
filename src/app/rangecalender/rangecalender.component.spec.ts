import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangecalenderComponent } from './rangecalender.component';

describe('RangecalenderComponent', () => {
  let component: RangecalenderComponent;
  let fixture: ComponentFixture<RangecalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangecalenderComponent]
    });
    fixture = TestBed.createComponent(RangecalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
