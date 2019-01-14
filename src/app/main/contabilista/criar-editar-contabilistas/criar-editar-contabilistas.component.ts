import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/general/toast.service';

export class CriarEditarContabilistasComponent implements OnInit {

  public title = 'Criar Contabilista';
  public salvarEditarText = 'SALVAR';

  public formModel: FormGroup;
  constructor(
    public formBuilder: FormBuilder,

    public router: Router,
    public toast: ToastService
  ) { }

  ngOnInit(): void {
    this.bind();
  }


  bind() {
    this.formModel = this.formBuilder.group({
      idContabilista: [''],
      nome: [''],
      cpf: [''],
      cnpj: [''],
      fone: [''],
      municipio: [''],
      uf: [''],

      crc: [''],
      codMunicipio: [''],
      endereco: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cep: [''],
      fax: [''],
      email: ['']
    });
  }

  salvarAtualizar(formModelValue, isValid) {

  }

}
