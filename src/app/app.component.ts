import { Component } from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MainComponent, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
