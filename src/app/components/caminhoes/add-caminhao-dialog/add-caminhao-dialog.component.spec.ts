import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaminhaoDialogComponent } from './add-caminhao-dialog.component';

describe('AddCaminhaoDialogComponent', () => {
  let component: AddCaminhaoDialogComponent;
  let fixture: ComponentFixture<AddCaminhaoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCaminhaoDialogComponent]
    });
    fixture = TestBed.createComponent(AddCaminhaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
