import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCargaDialogComponent } from './add-carga-dialog.component';

describe('AddCargaDialogComponent', () => {
  let component: AddCargaDialogComponent;
  let fixture: ComponentFixture<AddCargaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCargaDialogComponent]
    });
    fixture = TestBed.createComponent(AddCargaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
