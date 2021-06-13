import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromAcceptBilheteComponent } from './prom-accept-bilhete.component';

describe('PromAcceptBilheteComponent', () => {
  let component: PromAcceptBilheteComponent;
  let fixture: ComponentFixture<PromAcceptBilheteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromAcceptBilheteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromAcceptBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
