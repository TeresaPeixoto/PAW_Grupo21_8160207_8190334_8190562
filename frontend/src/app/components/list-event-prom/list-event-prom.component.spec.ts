import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventPromComponent } from './list-event-prom.component';

describe('ListEventPromComponent', () => {
  let component: ListEventPromComponent;
  let fixture: ComponentFixture<ListEventPromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEventPromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
