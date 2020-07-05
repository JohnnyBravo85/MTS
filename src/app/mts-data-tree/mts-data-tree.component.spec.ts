import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtsDataTreeComponent } from './mts-data-tree.component';

describe('MtsDataTreeComponent', () => {
  let component: MtsDataTreeComponent;
  let fixture: ComponentFixture<MtsDataTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtsDataTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtsDataTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
