import { OnInit, ViewChild, ElementRef, NgZone, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/general/toast.service';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';
import { GeneralDialogService } from 'src/app/general/general-dialog/general-dialog.service';
import { Municipio } from '../model/Municipio';

export abstract class CriarEditarContabilistasComponent implements OnInit {

  public title = 'Criar Contabilista';
  public salvarEditarText = 'Salvar';
  public active_menu = 'geral';

  inputAppearence = 'outline'; // appearance="outline"

  @ViewChild('geralPosition') geralPosition: ElementRef;
  @ViewChild('enderecoPosition') enderecoPosition: ElementRef;

  height = 594;

  routerLink = '/home/contabilistas';

  public formModel: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public dialog: GeneralDialogService<Municipio>,

    public scrollObserve: ScrollDispatcher,
    public router: Router,
    public toast: ToastService,
    public zone: NgZone
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = event.target.innerHeight - 64 - 39 - 46;
  }

  ngOnInit(): void {
    this.bind();

    this.scrollObserve
        .scrolled(400)
        .subscribe( (observe: CdkScrollable) => {
          const offsets = {
              offset: observe.getElementRef().nativeElement.offsetTop,
              top: observe.getElementRef().nativeElement.scrollTop,
              sum: observe.getElementRef().nativeElement.offsetTop + observe.getElementRef().nativeElement.scrollTop
          };

          this.zone.run( () => {
            if ( offsets.sum - 100 <= this.geralPosition.nativeElement.offsetTop ) {
              this.active_menu = 'geral';
            } else if ( offsets.sum - 100 <=  this.enderecoPosition.nativeElement.offsetTop ) {
              this.active_menu = 'endereco';
            }
          });
    });

    this.height = window.innerHeight - 64 - 39 - 46;
  }

  abstract salvarAtualizar(formModelValue, isValid);

  bind() {
    this.formModel = this.formBuilder.group({
      idContabilista: [''],

      // GERAL
      nome: ['', Validators.required],
      cnpj: [''],
      cpf: ['', Validators.required],
      crc: ['', Validators.required],
      fone: ['', Validators.required],
      fax: [''],
      email: [''],

      // Endereço
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      codMunicipio: ['', Validators.required],
      municipio: [''],
      cep: ['', Validators.required],
      uf: [''],

      // Outros
      ufDisabled: [ {value: '', disabled: true} ],
      codMunicipioDescricao: [ {value: '', disabled: true} ],
    });
  }

  getErrorMessage( nameControl: string ) {
    const control = this.formModel.get(nameControl);
    if ( !control.errors ) { return ''; }

    if ( control.hasError('required') ) { return 'Campo Obrigatório'; }


    return `Outro erro detectado !! => '${nameControl}'`;
  }

  getUFByCodigo( codigo: string ): string {
    switch (codigo.substring(0, 2)) {
      case '11': return 'RO';
      case '12': return 'AC';
      case '13': return 'AM';
      case '14': return 'RR';
      case '15': return 'PA';
      case '16': return 'AP';
      case '17': return 'TO';
      case '21': return 'MA';
      case '22': return 'PI';
      case '23': return 'CE';
      case '24': return 'RN';
      case '25': return 'PB';
      case '26': return 'PE';
      case '27': return 'AL';
      case '28': return 'SE';
      case '29': return 'BA';
      case '31': return 'MG';
      case '32': return 'ES';
      case '33': return 'RJ';
      case '35': return 'SP';
      case '41': return 'PR';
      case '42': return 'SC';
      case '43': return 'RS';
      case '50': return 'MS';
      case '51': return 'MT';
      case '53': return 'DF';
      case '52': return 'GO';
    }

    return '';
  }

  callCodMunicipioDialog() {
    const ret = this.dialog.openDialog('Escolha o Código do Município', ['codigo', 'descricao'], Municipio.model);
    ret
      .beforeClose()
      .subscribe( (result: Municipio) => {
          if (!result === false) {
            this.formModel.get('codMunicipio').setValue(result.codigo); // codMunicipioDescricao
            this.formModel.get('codMunicipioDescricao').setValue(result.descricao);
            this.formModel.get('uf').setValue( this.getUFByCodigo(result.codigo) );
            this.formModel.get('ufDisabled').setValue( this.getUFByCodigo(result.codigo) );
          }
      });
  }
}
