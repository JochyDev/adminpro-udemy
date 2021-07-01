import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { App_Routes } from './app.routes';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    App_Routes,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
