import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBilheteComponent } from './list-bilhete.component';

describe('ListBilheteComponent', () => {
  let component: ListBilheteComponent;
  let fixture: ComponentFixture<ListBilheteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBilheteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
