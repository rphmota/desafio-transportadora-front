import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotoristaDialogComponent } from './add-motorista-dialog.component';

describe('AddMotoristaDialogComponent', () => {
  let component: AddMotoristaDialogComponent;
  let fixture: ComponentFixture<AddMotoristaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMotoristaDialogComponent]
    });
    fixture = TestBed.createComponent(AddMotoristaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
