import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitarBilheteComponent } from './aceitar-bilhete.component';

describe('AceitarBilheteComponent', () => {
  let component: AceitarBilheteComponent;
  let fixture: ComponentFixture<AceitarBilheteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceitarBilheteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceitarBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
