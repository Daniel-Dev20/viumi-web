import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutingProviders, routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';
import { VideoComponent } from './components/video/video.component';
import { LocucionComponent } from './components/locucion/locucion.component';
import { DesignComponent } from './components/design/design.component';
import { DesarrolloWebComponent } from './components/desarrollo-web/desarrollo-web.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ModelajeComponent } from './components/modelaje/modelaje.component';
import { MaquillajeComponent } from './components/maquillaje/maquillaje.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    FotografiaComponent,
    VideoComponent,
    LocucionComponent,
    DesignComponent,
    DesarrolloWebComponent,
    ManagerComponent,
    ModelajeComponent,
    MaquillajeComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
