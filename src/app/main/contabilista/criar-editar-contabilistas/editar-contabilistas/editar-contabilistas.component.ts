import { Component, OnInit } from '@angular/core';
import { CriarEditarContabilistasComponent } from '../criar-editar-contabilistas.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/general/toast.service';

@Component({
  templateUrl: '../criar-editar-contabilistas.component.html',
  styleUrls: [ '../criar-editar-contabilistas.component.css']
})
export class EditarContabilistasComponent extends CriarEditarContabilistasComponent implements OnInit {
  constructor(
    formBuilder: FormBuilder,

    router: Router,
    toast: ToastService
  ) { super(formBuilder, router, toast); }

  ngOnInit(): void {
    super.ngOnInit();

    this.title = 'Editar Contabilista !!';
    this.salvarEditarText = 'EDITAR';
   }
}
