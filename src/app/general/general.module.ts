import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { MatButtonModule, MatDialogModule, MatSortModule, MatPaginatorModule, MatTableModule,
        MatProgressSpinnerModule, MatSelectModule, MatOptionModule, MatCardModule, MatFormFieldModule,
        MatInputModule, MatListModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatCheckboxModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { ToastService } from './toast.service';
import { DialogService } from './sample-dialog/dialog.service';

import { GeneralDialogComponent } from './general-dialog/general-dialog.component';
import { GeneralDialogService } from './general-dialog/general-dialog.service';
import { ChangeThemeService } from './themes/change-theme.service';

@NgModule({
  imports: [
    CommonModule,

    LayoutModule,
    MatButtonModule,
    MatDialogModule,
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  declarations: [ SampleDialogComponent, GeneralDialogComponent ],
  exports: [ SampleDialogComponent, GeneralDialogComponent ],
  providers: [
    ToastService,
    DialogService,
    GeneralDialogService,
    ChangeThemeService
  ]
})
export class GeneralModule { }
