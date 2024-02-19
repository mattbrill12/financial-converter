import { Routes } from '@angular/router';
import { FinNumFormComponent } from './fin-num-form/fin-num-form.component';
import { FinNumDetailComponent } from './fin-num-detail/fin-num-detail.component';

export const routes: Routes = [{
    path: '',
    component: FinNumFormComponent,
    title: 'Home Page'
}, {
    path: 'detail/:number',
    component: FinNumDetailComponent,
    title: 'Detail Page'
}, {
    path: '**', redirectTo: ''
}];
