import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhaoDetailsDialogComponent } from '../caminhao-detalhes/caminhao-detalhes.component';

describe('CaminhaoDetalhesComponent', () => {
  let component: CaminhaoDetailsDialogComponent;
  let fixture: ComponentFixture<CaminhaoDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaminhaoDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(CaminhaoDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
