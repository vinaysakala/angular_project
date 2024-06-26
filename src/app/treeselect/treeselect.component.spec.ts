import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeselectComponent } from './treeselect.component';

describe('TreeselectComponent', () => {
  let component: TreeselectComponent;
  let fixture: ComponentFixture<TreeselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeselectComponent]
    });
    fixture = TestBed.createComponent(TreeselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
