import { Component, OnInit, NgZone } from '@angular/core';
import { CriarEditarContabilistasComponent } from '../criar-editar-contabilistas.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/general/toast.service';
import { ScrollDispatcher } from '@angular/cdk/overlay';
import { DialogService } from 'src/app/general/sample-dialog/dialog.service';
import { GeneralDialogService } from 'src/app/general/general-dialog/general-dialog.service';
import { Municipio } from '../../model/Municipio';

@Component({
  templateUrl: '../criar-editar-contabilistas.component.html',
  styleUrls: [ '../criar-editar-contabilistas.component.scss']
})
export class CriarContabilitasComponent extends CriarEditarContabilistasComponent implements OnInit {
  constructor(
    formBuilder: FormBuilder,
    dialog: GeneralDialogService<Municipio>,

    public scrollObserve: ScrollDispatcher,
    router: Router,
    toast: ToastService,
    public zone: NgZone
  ) { super(formBuilder, dialog, scrollObserve, router, toast, zone); }

  ngOnInit(): void {
    super.ngOnInit();
  }

  salvarAtualizar(formModelValue, isValid) {
    console.log(JSON.stringify(formModelValue));



  }
}
