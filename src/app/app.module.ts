import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { Error404Component } from './componentes/error404/error404.component';

  
@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    DetallesComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
