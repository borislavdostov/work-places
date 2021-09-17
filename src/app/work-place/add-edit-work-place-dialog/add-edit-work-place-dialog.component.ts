import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-work-place-dialog',
  templateUrl: './add-edit-work-place-dialog.component.html',
  styleUrls: ['./add-edit-work-place-dialog.component.css']
})
export class AddEditWorkPlaceDialogComponent {

  title: string;
  confirmButtonTitle: string;
  confirmButtonColor: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<AddEditWorkPlaceDialogComponent>) {
    this.title = data.title || 'Create Work Place';
    this.confirmButtonTitle = data.isCreate ? 'Create' : 'Save';
    this.confirmButtonColor = data.isCreate ? 'accent' : 'primary';
  }

  onCreateClick() {
    this.dialogRef.close(true);
  }
}
