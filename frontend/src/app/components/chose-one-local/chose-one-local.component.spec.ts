import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseOneLocalComponent } from './chose-one-local.component';

describe('ChoseOneLocalComponent', () => {
  let component: ChoseOneLocalComponent;
  let fixture: ComponentFixture<ChoseOneLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseOneLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseOneLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
