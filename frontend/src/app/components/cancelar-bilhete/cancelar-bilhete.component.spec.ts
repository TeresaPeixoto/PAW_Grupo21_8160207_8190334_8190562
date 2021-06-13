import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarBilheteComponent } from './cancelar-bilhete.component';

describe('CancelarBilheteComponent', () => {
  let component: CancelarBilheteComponent;
  let fixture: ComponentFixture<CancelarBilheteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarBilheteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
