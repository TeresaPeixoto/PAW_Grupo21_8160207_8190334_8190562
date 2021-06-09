import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAdminComponent } from './become-admin.component';

describe('BecomeAdminComponent', () => {
  let component: BecomeAdminComponent;
  let fixture: ComponentFixture<BecomeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
