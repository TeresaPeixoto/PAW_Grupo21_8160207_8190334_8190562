import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceptedPromComponent } from './admin-accepted-prom.component';

describe('AdminAcceptedPromComponent', () => {
  let component: AdminAcceptedPromComponent;
  let fixture: ComponentFixture<AdminAcceptedPromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcceptedPromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcceptedPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
