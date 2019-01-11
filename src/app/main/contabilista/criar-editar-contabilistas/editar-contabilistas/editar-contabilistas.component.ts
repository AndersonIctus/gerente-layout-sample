import { Component, OnInit } from '@angular/core';
import { CriarEditarContabilistasComponent } from '../criar-editar-contabilistas.component';

@Component({
  templateUrl: '../criar-editar-contabilistas.component.html'
})
export class EditarContabilistasComponent extends CriarEditarContabilistasComponent implements OnInit {
  constructor() { super(); }

  ngOnInit(): void {
    this.title = 'Editar Contabilista !!';
   }
}
