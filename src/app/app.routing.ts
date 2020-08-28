import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';
import { VideoComponent } from './components/video/video.component';
import { LocucionComponent } from './components/locucion/locucion.component';
import { DesignComponent } from './components/design/design.component';
import { DesarrolloWebComponent } from './components/desarrollo-web/desarrollo-web.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ModelajeComponent } from './components/modelaje/modelaje.component';
import { MaquillajeComponent } from './components/maquillaje/maquillaje.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'Home', component: HomeComponent},
    {path: 'Fotografia', component: FotografiaComponent},
    {path: 'Video', component: VideoComponent},
    {path: 'Locucion', component: LocucionComponent},
    {path: 'Diseño', component: DesignComponent},
    {path: 'Desarrollo-web', component:DesarrolloWebComponent},
    {path: 'Manager', component:ManagerComponent},
    {path: 'Modelaje', component:ModelajeComponent},
    {path: 'Maquillaje', component:MaquillajeComponent},
    {path: 'Login', component:LoginComponent},
    {path: 'Register', component:RegisterComponent},
    {path:'**', component: ErrorComponent}


]
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);