import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/general/toast.service';

import { CriarEditarContabilistasDoisComponent } from '../criar-editar-contabilistas-dois.component';
import { ScrollDispatcher } from '@angular/cdk/overlay';

@Component({
  templateUrl: '../criar-editar-contabilistas-dois.component.html',
  styleUrls: [ '../criar-editar-contabilistas-dois.component.css']
})
export class CriarContabilitasDoisComponent extends CriarEditarContabilistasDoisComponent implements OnInit {
  constructor(
    formBuilder: FormBuilder,

    public scrollObserve: ScrollDispatcher,
    router: Router,
    toast: ToastService
  ) { super(formBuilder, scrollObserve, router, toast); }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
