import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../../core/services/main.service';

@Component({
  selector: 'page-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  mainService = inject(MainService);

  
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
}
