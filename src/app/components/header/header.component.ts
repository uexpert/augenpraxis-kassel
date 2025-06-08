import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from '../../core/ng-zorro-antd/ng-zorro-antd.module';
import { GlobalDataService } from '../../core/services/global-data.service';

@Component({
  selector: 'comp-header',
  imports: [CommonModule, RouterModule, NgZorroAntdModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // Services
  gds = inject(GlobalDataService);

  // Constants
  imagesPath = environment.imagesPath;

}
