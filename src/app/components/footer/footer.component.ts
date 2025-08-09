import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { GlobalDataService } from '../../core/services/global-data.service';
import { NgZorroAntdModule } from '../../core/ng-zorro-antd/ng-zorro-antd.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'comp-footer',
  imports: [CommonModule, NgZorroAntdModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  gds = inject(GlobalDataService);
  imagesPath = environment.imagesPath;

}
