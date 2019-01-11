import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { ListarContabilistasComponent } from './main/contabilista/listar-contabilistas/listar-contabilistas.component';
// tslint:disable-next-line:max-line-length
import { CriarContabilitasComponent } from './main/contabilista/criar-editar-contabilistas/criar-contabilistas/criar-contabilistas.component';
// tslint:disable-next-line:max-line-length
import { EditarContabilistasComponent } from './main/contabilista/criar-editar-contabilistas/editar-contabilistas/editar-contabilistas.component';
import { ListarContabilistasDoisComponent } from './main/contabilista/listar-contabilistas-dois/listar-contabilistas-dois.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: MainComponent,
    children: [
      { path: '', redirectTo: 'contabilistas', pathMatch: 'full' },
      { path: 'contabilistas', component: ListarContabilistasComponent },
      { path: 'contabilistas/create', component: CriarContabilitasComponent },
      { path: 'contabilistas/:idContabilista', component: EditarContabilistasComponent },
      { path: 'contabilistas-dois', component: ListarContabilistasDoisComponent },
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
