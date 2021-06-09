import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllEventsAdminComponent } from './list-all-events-admin.component';

describe('ListAllEventsAdminComponent', () => {
  let component: ListAllEventsAdminComponent;
  let fixture: ComponentFixture<ListAllEventsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllEventsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllEventsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
