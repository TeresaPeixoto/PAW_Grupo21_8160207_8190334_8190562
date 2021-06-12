import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBilhetesComponent } from './listar-bilhetes.component';

describe('ListarBilhetesComponent', () => {
  let component: ListarBilhetesComponent;
  let fixture: ComponentFixture<ListarBilhetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBilhetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBilhetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
