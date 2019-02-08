import { Component, OnInit, NgZone } from '@angular/core';
import { CriarEditarContabilistasComponent } from '../criar-editar-contabilistas.component';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/general/toast.service';
import { ScrollDispatcher } from '@angular/cdk/overlay';
import { DialogService } from 'src/app/general/sample-dialog/dialog.service';
import { GeneralDialogService } from 'src/app/general/general-dialog/general-dialog.service';
import { Municipio } from '../../model/Municipio';
import { Contabilista } from '../../model/Contabilista';

@Component({
  templateUrl: '../criar-editar-contabilistas.component.html',
  styleUrls: [ '../criar-editar-contabilistas.component.scss']
})
export class EditarContabilistasComponent extends CriarEditarContabilistasComponent implements OnInit {

  contabilista: Contabilista;

  constructor(
    formBuilder: FormBuilder,
    dialog: GeneralDialogService<Municipio>,

    public scrollObserve: ScrollDispatcher,
    public router: Router,
    public route: ActivatedRoute,
    public toast: ToastService,
    public zone: NgZone
  ) { super(formBuilder, dialog, scrollObserve, router, toast, zone); }

  ngOnInit(): void {
    super.ngOnInit();

    this.title = 'Editar Contabilista';
    this.salvarEditarText = 'Atualizar';

    const id = +this.route.snapshot.paramMap.get('idContabilista');
    this.contabilista = Contabilista.model.find( ele => ele.idContabilista === id );

    this.setValues(this.contabilista);

  }

  setValues(model: Contabilista): any {
    this.formModel.get('idContabilista').setValue(model.idContabilista);
    this.formModel.get('nome').setValue(model.nome);
    this.formModel.get('cnpj').setValue(model.cnpj);
    this.formModel.get('cpf').setValue(model.cpf);
    this.formModel.get('crc').setValue(model.crc);
    this.formModel.get('fone').setValue(model.fone);
    this.formModel.get('fax').setValue(model.fax);
    this.formModel.get('email').setValue(model.email);

    this.formModel.get('endereco').setValue(model.endereco);
    this.formModel.get('numero').setValue(model.numero);
    this.formModel.get('complemento').setValue(model.complemento);
    this.formModel.get('bairro').setValue(model.bairro);
    this.formModel.get('codMunicipio').setValue(model.codMunicipio);
    this.formModel.get('municipio').setValue(model.municipio);
    this.formModel.get('cep').setValue(model.cep);
    this.formModel.get('uf').setValue(model.uf);

    this.formModel.get('ufDisabled').setValue(model.uf);

    const municipio = this.getMunicipio( model.codMunicipio );
    if ( !municipio === false) {
      this.formModel.get('codMunicipioDescricao').setValue( municipio.descricao );
    }
  }

  getMunicipio(codMunicipio: string): Municipio {
    return Municipio.model.find( ele => ele.codigo === codMunicipio );
  }

  salvarAtualizar(formModelValue, isValid) {
    console.log(JSON.stringify(formModelValue));

    if (isValid === false) {
      this.toast.error('Formulário contém campos inválidos!');
    } else {
      this.toast.success('Contabilista Atualizado com Sucesso!');
      this.router.navigate([this.routerLink]);
    }
  }
}
