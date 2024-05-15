import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaminhaoDialogComponent } from './edit-caminhao-dialog.component';

describe('EditCaminhaoDialogComponent', () => {
  let component: EditCaminhaoDialogComponent;
  let fixture: ComponentFixture<EditCaminhaoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCaminhaoDialogComponent]
    });
    fixture = TestBed.createComponent(EditCaminhaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
