import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PersonpageComponent } from './components/personpage/personpage.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'persons/:id', component: PersonpageComponent}
];
