import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquirirBilhetesComponent } from './adquirir-bilhetes.component';

describe('AdquirirBilhetesComponent', () => {
  let component: AdquirirBilhetesComponent;
  let fixture: ComponentFixture<AdquirirBilhetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdquirirBilhetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdquirirBilhetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
