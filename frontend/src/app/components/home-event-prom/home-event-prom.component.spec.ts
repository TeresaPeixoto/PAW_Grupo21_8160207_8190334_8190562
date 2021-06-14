import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventPromComponent } from './home-event-prom.component';

describe('HomeEventPromComponent', () => {
  let component: HomeEventPromComponent;
  let fixture: ComponentFixture<HomeEventPromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEventPromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEventPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
