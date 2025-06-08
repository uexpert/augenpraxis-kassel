import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  whatsAppUrl: string = '';
  whatsAppMessage: string = '';
  whatsAppPhone: string = '+4915758931435';

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
