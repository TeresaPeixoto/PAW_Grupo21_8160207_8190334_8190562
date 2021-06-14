import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePromComponent } from './home-prom.component';

describe('HomePromComponent', () => {
  let component: HomePromComponent;
  let fixture: ComponentFixture<HomePromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
