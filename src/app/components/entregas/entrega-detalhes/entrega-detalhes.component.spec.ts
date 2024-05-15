import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaDetailsDialogComponent } from '../entrega-detalhes/entrega-detalhes.component';

describe('EntregaDetalhesComponent', () => {
  let component: EntregaDetailsDialogComponent;
  let fixture: ComponentFixture<EntregaDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntregaDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(EntregaDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
