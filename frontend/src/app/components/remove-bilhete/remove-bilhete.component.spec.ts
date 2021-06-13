import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBilheteComponent } from './remove-bilhete.component';

describe('RemoveBilheteComponent', () => {
  let component: RemoveBilheteComponent;
  let fixture: ComponentFixture<RemoveBilheteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBilheteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
