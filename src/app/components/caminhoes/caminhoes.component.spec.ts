import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoesComponent } from './caminhoes.component';

describe('CaminhoesComponent', () => {
  let component: CaminhoesComponent;
  let fixture: ComponentFixture<CaminhoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaminhoesComponent]
    });
    fixture = TestBed.createComponent(CaminhoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
