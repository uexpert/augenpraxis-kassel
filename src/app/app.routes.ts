import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'contact', component: ContactComponent
            }
        ]
    }
];
