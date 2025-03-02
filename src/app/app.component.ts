import { Component } from '@angular/core';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'augenpraxis-kassel';
}
