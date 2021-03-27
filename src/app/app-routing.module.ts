import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { Error404Component } from './componentes/error404/error404.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';


const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: '/personajes' },  
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personajes/:idPersonaje', component: DetallesComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
