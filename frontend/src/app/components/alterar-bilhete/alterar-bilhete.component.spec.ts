import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarBilheteComponent } from './alterar-bilhete.component';

describe('AlterarBilheteComponent', () => {
  let component: AlterarBilheteComponent;
  let fixture: ComponentFixture<AlterarBilheteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarBilheteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarBilheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
