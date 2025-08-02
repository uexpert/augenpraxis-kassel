import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalDataService } from '../../core/services/global-data.service';

@Component({
  selector: 'loading-screen',
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss'
})
export class LoadingScreenComponent {
  gds = inject(GlobalDataService);
}
