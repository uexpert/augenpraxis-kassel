import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'comp-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  imagesPath = environment.imagesPath;

}
