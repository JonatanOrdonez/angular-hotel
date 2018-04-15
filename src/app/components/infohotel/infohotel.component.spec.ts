import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfohotelComponent } from './infohotel.component';

describe('InfohotelComponent', () => {
  let component: InfohotelComponent;
  let fixture: ComponentFixture<InfohotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfohotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfohotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
