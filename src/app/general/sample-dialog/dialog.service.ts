import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SampleDialogComponent } from './sample-dialog.component';

@Injectable()
export class DialogService {

  private dialogRef: MatDialogRef<SampleDialogComponent, any>;

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(title?: string, contentText?: string) {
    this.dialogRef = this.dialog.open(SampleDialogComponent, {
      data: { title: title, contentText: contentText }
    });

    return this.dialogRef;

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
