import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-user-dialog',
  templateUrl: './add-edit-user-dialog.component.html',
  styleUrls: ['./add-edit-user-dialog.component.css']
})
export class AddEditUserDialogComponent {

  title: string;
  confirmButtonTitle: string;
  confirmButtonColor: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<AddEditUserDialogComponent>) {
    this.title = data.title;
    this.confirmButtonTitle = data.confirmButtonTitle || 'Create';
    this.confirmButtonColor = data.confirmButtonColor || 'accent';
  }

  onCreateClick() {
    this.dialogRef.close(true);
  }
}
