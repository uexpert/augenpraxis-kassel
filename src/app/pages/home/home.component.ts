import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { MainService } from '../../core/services/main.service';
import { SliderComponent } from "../../components/slider/slider.component";
import { ScheduleComponent } from "../../components/schedule/schedule.component";
import { LatestNewsComponent } from '../../components/latest-news/latest-news.component';
import { praxisClose, praxisCloseAugust, transportList } from '../../core/utils/constants';

declare var $: any; // Declare jQuery

@Component({
  selector: 'page-home',
  imports: [CommonModule, SliderComponent, ScheduleComponent, LatestNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  mainService = inject(MainService);
  imagesPath = environment.imagesPath;
  transportList = transportList;
  praxisCloseAugust = praxisCloseAugust;
  

  ngOnInit(): void {
    this.onInit();
  }

  ngAfterViewInit(): void {
    this.afterViewInit();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }
  
  onDestroy() {
    // this.mainService.removePreloader();
  }
  
  onInit() {
    this.mainService.runPreloader();
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
