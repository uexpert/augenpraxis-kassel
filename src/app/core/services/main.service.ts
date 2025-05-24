import { Injectable } from '@angular/core';


declare var $: any; // Declare jQuery

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  /*====================
    Preloader JS
  ======================*/
  runPreloader() {
    $('.preloader').removeClass('preloader-deactivate');
    // $(window).on('load', function () {
    //   $('.preloader').addClass('preloader-deactivate');
    // });
  }
}
