import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'dashboard' , component: DashboardComponent},
    { path: 'attendance' , component: AttendanceComponent},
    { path: '', component: LoginPageComponent },
    { path: '**', component: LoginPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent, DashboardComponent, AttendanceComponent];