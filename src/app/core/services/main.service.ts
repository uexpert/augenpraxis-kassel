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
    setTimeout(() => {
        $('.preloader').addClass('preloader-deactivate');
    }, 500);
  }

  // removePreloader() {
  //   $('.preloader').removeClass('preloader-deactivate');
  // }
}
