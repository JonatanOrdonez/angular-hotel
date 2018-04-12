import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhotelsComponent } from './listhotels.component';

describe('ListhotelsComponent', () => {
  let component: ListhotelsComponent;
  let fixture: ComponentFixture<ListhotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
