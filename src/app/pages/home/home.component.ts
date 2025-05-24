import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { MainService } from '../../core/services/main.service';

declare var $: any; // Declare jQuery

@Component({
  selector: 'page-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  mainService = inject(MainService);
  imagesPath = environment.imagesPath;

  ngOnInit(): void {
    this.onInit();
  }

  ngAfterViewInit(): void {
    this.afterViewInit();
  }
  
  onInit() {
    // this.mainService.runPreloader();
  }

  afterViewInit() {
    setTimeout(() => {
      this.startCustomJS();
    }, 50);
  }

  startCustomJS() {
    
		/*===============================
			Hero Slider JS
		=================================*/ 
		$(".hero-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
		});
  }
}
