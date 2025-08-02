import { Component, inject } from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { GlobalDataService } from './core/services/global-data.service';

@Component({
  selector: 'app-root',
  imports: [MainComponent, HeaderComponent, FooterComponent, CommonModule, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  gds = inject(GlobalDataService);
}
