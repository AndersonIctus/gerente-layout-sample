import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatButtonToggleModule, MatCheckboxModule,
        MatIconModule} from '@angular/material';

import { GeneralModule } from 'src/app/general/general.module';

import { ListarContabilistasComponent } from './listar-contabilistas/listar-contabilistas.component';
import { CriarEditarContabilistasComponent } from './criar-editar-contabilistas/criar-editar-contabilistas.component';
import { CriarContabilitasComponent } from './criar-editar-contabilistas/criar-contabilistas/criar-contabilistas.component';
import { EditarContabilistasComponent } from './criar-editar-contabilistas/editar-contabilistas/editar-contabilistas.component';
import { SampleDialogComponent } from 'src/app/general/sample-dialog/sample-dialog.component';
import { ListarContabilistasDoisComponent } from './listar-contabilistas-dois/listar-contabilistas-dois.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    GeneralModule,

    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatIconModule
  ],
  declarations: [
    ListarContabilistasComponent,
    ListarContabilistasDoisComponent,
    CriarContabilitasComponent,
    EditarContabilistasComponent,
  ],
  exports: [
      ListarContabilistasComponent,
      ListarContabilistasDoisComponent,
      CriarContabilitasComponent,
      EditarContabilistasComponent
  ],
  entryComponents: [
    SampleDialogComponent
  ]
})
export class ContabilistaModule { }
