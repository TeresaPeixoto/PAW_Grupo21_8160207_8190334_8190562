import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPromComponent } from './list-prom.component';

describe('ListPromComponent', () => {
  let component: ListPromComponent;
  let fixture: ComponentFixture<ListPromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
