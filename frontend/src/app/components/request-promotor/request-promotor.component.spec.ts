import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPromotorComponent } from './request-promotor.component';

describe('RequestPromotorComponent', () => {
  let component: RequestPromotorComponent;
  let fixture: ComponentFixture<RequestPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
