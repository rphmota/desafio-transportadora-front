import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMotoristaDialogComponent } from './edit-motorista-dialog.component';

describe('EditMotoristaDialogComponent', () => {
  let component: EditMotoristaDialogComponent;
  let fixture: ComponentFixture<EditMotoristaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMotoristaDialogComponent]
    });
    fixture = TestBed.createComponent(EditMotoristaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
