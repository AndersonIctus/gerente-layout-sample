import { Component, OnInit } from '@angular/core';
import { CriarEditarContabilistasComponent } from '../criar-editar-contabilistas.component';

@Component({
  templateUrl: '../criar-editar-contabilistas.component.html'
})
export class CriarContabilitasComponent extends CriarEditarContabilistasComponent implements OnInit {
  constructor() { super(); }

  ngOnInit(): void { }
}
