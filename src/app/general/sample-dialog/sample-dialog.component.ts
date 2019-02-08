import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'acs-sample-dialog',
  templateUrl: './sample-dialog.component.html',
  styleUrls: ['./sample-dialog.component.scss']
})
export class SampleDialogComponent implements OnInit {

  title = 'Dialog Title';
  contentText = 'Conteúdo do Dialog';


  constructor(
    public dialogRef: MatDialogRef<SampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  /**
   * constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
  }
   */
  ngOnInit(): void {
    this.title = this.data.title;
    this.contentText = this.data.contentText;
  }
}
