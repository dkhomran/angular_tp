import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: '', component:UserComponent},
    { path: 'user', component: UserComponent},
    { path: 'register', component: RegisterComponent}
];
