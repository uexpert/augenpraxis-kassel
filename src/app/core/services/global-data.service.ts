import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  whatsAppUrl: string = '';
  whatsAppMessage: string = '';
  whatsAppPhone: string = '+4915758931435';
  contactForm!: FormGroup;
  get cForm(): any { return this.contactForm.controls; };

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
}
