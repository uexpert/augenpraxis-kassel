import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../core/ng-zorro-antd/ng-zorro-antd.module';
import { GlobalDataService } from '../../core/services/global-data.service';

@Component({
  selector: 'schedule',
  imports: [CommonModule, NgZorroAntdModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  // Services
  gds = inject(GlobalDataService);
  
  imagesPath = environment.imagesPath;

}
