import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCargaDialogComponent } from './edit-carga-dialog.component';

describe('EditCargaDialogComponent', () => {
  let component: EditCargaDialogComponent;
  let fixture: ComponentFixture<EditCargaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCargaDialogComponent]
    });
    fixture = TestBed.createComponent(EditCargaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
