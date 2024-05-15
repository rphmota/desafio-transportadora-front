import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntregaDialogComponent } from './add-entrega-dialog.component';

describe('AddEntregaDialogComponent', () => {
  let component: AddEntregaDialogComponent;
  let fixture: ComponentFixture<AddEntregaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEntregaDialogComponent]
    });
    fixture = TestBed.createComponent(AddEntregaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
