import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'comp-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  imagesPath = environment.imagesPath;

}
