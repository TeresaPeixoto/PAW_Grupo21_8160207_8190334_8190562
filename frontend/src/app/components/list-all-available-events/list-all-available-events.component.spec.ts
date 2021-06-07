import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAvailableEventsComponent } from './list-all-available-events.component';

describe('ListAllAvailableEventsComponent', () => {
  let component: ListAllAvailableEventsComponent;
  let fixture: ComponentFixture<ListAllAvailableEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllAvailableEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllAvailableEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
