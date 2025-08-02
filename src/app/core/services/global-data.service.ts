import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { disableEnableFormInput } from '../utils/globalTools';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  whatsAppUrl: string = '';
  whatsAppMessage: string = '';
  whatsAppPhone: string = '+4956116567';
  contactForm!: FormGroup;
  get cForm(): any { return this.contactForm.controls; };
  contactFormLoading: boolean = false;
  loadingScreenObj: {show: boolean, text: string} = { show: false, text: 'Loading...' };

  constructor() {
    this.setWhatsAppUrl();
  }

  setWhatsAppUrl() {
    if (this.whatsAppPhone) {
      this.whatsAppUrl = this.whatsAppMessage ?
        `https://wa.me/${this.whatsAppPhone}?text=${encodeURIComponent(this.whatsAppMessage)}` :
        `https://wa.me/${this.whatsAppPhone}`
    }
  }
  
  setContactForm(loading: boolean) {
    this.contactFormLoading = loading;
    disableEnableFormInput(this.cForm, ['email', 'name', 'message', 'tel', 'subject'], loading);
  }

  resetContactForm() {
    this.contactForm.reset();
  }

  displayLoadingScreen(text: string = '') {
   this.loadingScreenObj = { show: true, text: text };
  }

  hideLoadingScreen() {
    this.loadingScreenObj = { show: false, text: '' };
  }

}
