import { OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/general/toast.service';
import { ScrollDispatcher } from '@angular/cdk/overlay';

export class CriarEditarContabilistasDoisComponent implements OnInit, AfterViewInit {

  // @ViewChild('stickyMenu') menuElement: ElementRef;

  public title = 'Criar Contabilista';
  public salvarEditarText = 'SALVAR';
  public active_menu = 'principal';

  sticky = false;
  menuPosition: any;

  public formModel: FormGroup;
  constructor(
    public formBuilder: FormBuilder,

    public scrollObserve: ScrollDispatcher,
    public router: Router,
    public toast: ToastService
  ) { }

  ngOnInit(): void {
    this.bind();
    // this.scrollObserve.scrollContainers.
  }

  ngAfterViewInit() {
      // this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

  // @HostListener('window:scroll', ['$event'])
  // handleScroll() {
  //   console.log('menu ...');
  //   this.sticky = (window.pageYOffset >= this.menuPosition) ? true : false;
  // }

  // scroll(el: HTMLElement) {
  //   // el.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //   el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }



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
