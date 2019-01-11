import { Injectable } from '@angular/core';

declare var toastr: any;

@Injectable({providedIn: 'root'})
export class ToastService {

  constructor() {
    this.setup();
  }

  success ( title: string, message?: string, options?: any ) {
    toastr.success(message, title, options);
  }

  warning ( title: string, message?: string, options?: any ) {
    toastr.warning(message, title, options);
  }

  error ( title: string, message?: string, options?: any ) {
    toastr.error(message, title, options);
  }

  info ( title: string, message?: string, options?: any ) {
    toastr.info(message, title, options);
  }

  setup() {
    toastr.options = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-bottom-full-width',
      'preventDuplicates': false,
      'onclick': null,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    };
  }
}
