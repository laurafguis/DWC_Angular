import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelArticuloComponent } from './del-articulo.component';

describe('DelArticuloComponent', () => {
  let component: DelArticuloComponent;
  let fixture: ComponentFixture<DelArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
