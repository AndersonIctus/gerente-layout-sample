import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatButtonToggleModule, MatCheckboxModule,
        MatIconModule, MatFormFieldModule, MatDialogModule, MatToolbarModule, MatSidenavModule,
        MatListModule, MatInputModule, MatSelectModule, MatOptionModule, MatProgressSpinnerModule} from '@angular/material';

import { GeneralModule } from 'src/app/general/general.module';

import { ListarContabilistasComponent } from './listar-contabilistas/listar-contabilistas.component';
import { CriarContabilitasComponent } from './criar-editar-contabilistas/criar-contabilistas/criar-contabilistas.component';
import { EditarContabilistasComponent } from './criar-editar-contabilistas/editar-contabilistas/editar-contabilistas.component';
import { SampleDialogComponent } from 'src/app/general/sample-dialog/sample-dialog.component';
import { ListarContabilistasDoisComponent } from './listar-contabilistas-dois/listar-contabilistas-dois.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

// tslint:disable-next-line:max-line-length
import { EditarContabilistasDoisComponent } from './criar-editar-contabilistas-dois/editar-contabilistas-dois/editar-contabilistas-dois.component';
// tslint:disable-next-line:max-line-length
import { CriarContabilitasDoisComponent } from './criar-editar-contabilistas-dois/criar-contabilistas-dois/criar-contabilistas-dois.component';

// tslint:disable-next-line:max-line-length
import { EditarContabilistasTresComponent } from './criar-editar-contabilistas-tres/editar-contabilistas-tres/editar-contabilistas-tres.component';
// tslint:disable-next-line:max-line-length
import { CriarContabilitasTresComponent } from './criar-editar-contabilistas-tres/criar-contabilistas-tres/criar-contabilistas-tres.component';

import { LayoutModule } from '@angular/cdk/layout';
import { GeneralDialogComponent } from 'src/app/general/general-dialog/general-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    GeneralModule,

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

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule, MatCheckboxModule,

    ScrollDispatchModule
  ],
  declarations: [
    ListarContabilistasComponent, CriarContabilitasComponent, EditarContabilistasComponent,
    ListarContabilistasDoisComponent, CriarContabilitasDoisComponent, EditarContabilistasDoisComponent,
    EditarContabilistasTresComponent, CriarContabilitasTresComponent
  ],
  exports: [
      ListarContabilistasComponent,
      ListarContabilistasDoisComponent,
      CriarContabilitasComponent,
      EditarContabilistasComponent
  ],
  entryComponents: [
    SampleDialogComponent,
    GeneralDialogComponent
  ]
})
export class ContabilistaModule { }
