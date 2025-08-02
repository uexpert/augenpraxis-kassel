import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../../core/services/main.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { GlobalDataService } from '../../core/services/global-data.service';
import { emailValidator } from '../../core/utils/globalTools';
import { NgZorroAntdModule } from '../../core/ng-zorro-antd/ng-zorro-antd.module';
import { TelephoneNumberRegex } from '../../core/utils/regex';

@Component({
  selector: 'page-contact',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  mainService = inject(MainService);
  sanitizer = inject(DomSanitizer);
  http = inject(HttpClient);
  formBuilder = inject(FormBuilder);
  gds = inject(GlobalDataService);

  contactAPI = environment.contactAPI;
  mapUrl!: SafeResourceUrl;
  form = {
    name: '',
    email: '',
    message: '',
    tel: '',
    subject: ''
  };

  constructor() {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.795905313783!2d9.479006776880347!3d51.31487912474899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb3f4f53e27995%3A0xfd9acdb99a9cc853!2sAugenarzt%20Eyad%20Naema!5e0!3m2!1sde!2sde!4v1749702441958!5m2!1sde!2sde'
    );
    
    this.gds.contactForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.pattern(/\S/)
        ],
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(/\S/),
          emailValidator()
        ],
      ],
      message: [
        null,
        [
          Validators.required,
          Validators.pattern(/\S/)
        ],
      ],
      tel: [
        null,
        [
          Validators.required,
          Validators.pattern(TelephoneNumberRegex)
        ],
      ],
      subject: [
        null,
        [
          Validators.required,
          Validators.pattern(/\S/)
        ],
      ]
    });
  }


  ngOnInit(): void {
    this.onInit();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }


  onInit() {
    this.mainService.runPreloader();
  }

  onDestroy() {
    // this.mainService.removePreloader();
  }


  sendMessage() {
    if (this.gds.contactForm.valid && !this.gds.contactFormLoading) {
      // const sanitizedMessage = this.gds.contactForm.value.message.replace(/\r?\n/g, '\\n');
      const sanitizedMessage = this.gds.contactForm.value.message;
      const cleanName = this.gds.contactForm.value.name?.trim() || '';
      const cleanEmail = this.gds.contactForm.value.email?.trim() || '';
      const cleanTelephone = this.gds.contactForm.value.tel?.trim() || '';
      const cleanSubject = this.gds.contactForm.value.subject?.trim() || '';
      if (sanitizedMessage && cleanEmail && cleanName && cleanSubject && cleanTelephone) {
        this.gds.displayLoadingScreen('Sende Nachricht...');
        this.gds.setContactForm(true);
        this.http.post(`${this.contactAPI}contact`, {
          name: cleanName,
          email: cleanEmail,
          tel: cleanTelephone,
          subject: cleanSubject,
          message: sanitizedMessage
        }, {
          headers: { 'Content-Type': 'application/json' }
        }).subscribe({
          next: () => {
            this.gds.hideLoadingScreen();
            setTimeout(() => {
              alert('✅ Das Formular wurde erfolgreich gesendet.');
            }, 500);
            this.gds.resetContactForm();
          },
          error: err => {
            this.gds.hideLoadingScreen();
            alert('❌ Fehler beim Senden:\n' + err.message);
          },
          complete: () => {
            this.gds.setContactForm(false);
          }
        });
      }
      else {
        alert('❌ Bitte füllen Sie alle Felder korrekt aus.');
      }
    }

  }
}
