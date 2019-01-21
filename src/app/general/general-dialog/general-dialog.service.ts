import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatTableDataSource } from '@angular/material';
import { GeneralDialogComponent } from './general-dialog.component';

@Injectable()
export class GeneralDialogService<T> {
  private dialogRef: MatDialogRef<GeneralDialogComponent<any>, any>;

  constructor(
    public dialog: MatDialog
  ) { }


  openDialog(title: string, columnsToDisplay: string[] , dataModel: T[]) {
    this.dialogRef = this.dialog.open(GeneralDialogComponent, {
      data: { title: title, columnsToDisplay: columnsToDisplay, dataModel: dataModel }
    });

    return this.dialogRef;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
