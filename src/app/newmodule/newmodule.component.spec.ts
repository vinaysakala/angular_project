import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmoduleComponent } from './newmodule.component';

describe('NewmoduleComponent', () => {
  let component: NewmoduleComponent;
  let fixture: ComponentFixture<NewmoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewmoduleComponent]
    });
    fixture = TestBed.createComponent(NewmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
