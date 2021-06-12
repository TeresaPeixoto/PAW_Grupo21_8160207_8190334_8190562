import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeLocalComponent } from './edite-local.component';

describe('EditeLocalComponent', () => {
  let component: EditeLocalComponent;
  let fixture: ComponentFixture<EditeLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
