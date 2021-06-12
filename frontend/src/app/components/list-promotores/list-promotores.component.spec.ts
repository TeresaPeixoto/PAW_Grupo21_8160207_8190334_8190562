import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPromotoresComponent } from './list-promotores.component';

describe('ListPromotoresComponent', () => {
  let component: ListPromotoresComponent;
  let fixture: ComponentFixture<ListPromotoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPromotoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPromotoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
