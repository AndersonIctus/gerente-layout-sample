import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastService } from '../general/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  empresas: any[] = [
    { idEmpresa: 2477, nome: 'Posto Teste' },
    { idEmpresa: 3025, nome: 'Ipiranga' }
  ];

  hide = true;
  load_login = false;
  submmit = false;

  formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.load_login = false;

    this.formLogin = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
      empresa: ['', Validators.required]
    });
  }

  logar(formValue: any, isValid: boolean) {
    this.submmit = true;

    // console.log( JSON.stringify(formValue) );

    const validaForm: boolean = formValue.login === 'admin' &&
                                formValue.senha === 'admin' &&
                                formValue.empresa === 2477;
    if ( isValid ) {
      this.load_login = !this.load_login;
      setTimeout(() => {
        if (validaForm) {
          this.router.navigate(['/home']);
        } else {
          this.toast.error('Não foi possível efetuar o Login! Verifique se os dados passados estão corretos !');
        }

        this.load_login = !this.load_login;
      }, 2000);
    }
  }

  getErrorMessage(formControl: FormControl) {
    return formControl.hasError('required')
              ? 'Este campo é obrigatório'
              : '';
  }
}
