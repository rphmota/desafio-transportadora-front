import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaDetailsDialogComponent } from './motorista-detalhes.component';

describe('MotoristaDetalhesComponent', () => {
  let component: MotoristaDetailsDialogComponent;
  let fixture: ComponentFixture<MotoristaDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotoristaDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(MotoristaDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
