import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllLocalsComponent } from './list-all-locals.component';

describe('ListAllLocalsComponent', () => {
  let component: ListAllLocalsComponent;
  let fixture: ComponentFixture<ListAllLocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllLocalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllLocalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
