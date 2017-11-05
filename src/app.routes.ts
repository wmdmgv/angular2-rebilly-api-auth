import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { Login } from './login';
import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  { path: '',       component: Login },
  { path: 'login',  component: Login },
  { path: 'dashboard',   component: Dashboard, canActivate: [AuthGuard] },
  { path: '**',     component: Login },
];
