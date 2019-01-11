import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastService } from './toast.service';
import { DialogService } from './sample-dialog/dialog.service';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,

    LayoutModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [ SampleDialogComponent ],
  exports: [ SampleDialogComponent ],
  providers: [
    ToastService,
    DialogService
  ]
})
export class GeneralModule { }
