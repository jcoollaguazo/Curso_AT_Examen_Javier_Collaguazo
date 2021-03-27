import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/modelos/personaje.model';
import { PostsService } from 'src/app/servicios/posts.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  arrPosts: any;
  idPer: number;
  personaje: any;
  comprueba: boolean;
  arrPersonajes: any;
  propiedadesParrafo: any;

  constructor(private activatedRoute: ActivatedRoute, private postsSvc: PostsService) { 
    this.propiedadesParrafo = {
      backgroundColor: 'lightblue'      
    };
  }

  ngOnInit() {

    this.postsSvc.getAll()
      .then(async results => this.arrPosts = await results['results'])
      .catch(err => console.log(err));     

    this.activatedRoute.params.subscribe(async params => {     
      this.personaje = await this.postsSvc.getById(Number(params.idPersonaje));                  
            
      this.arrPersonajes = await this.arrPosts.find(personajesFound => {
        return personajesFound.id === Number(params.idPersonaje);
      }); 
      

      switch (this.arrPersonajes.status) {
        case 'Alive':                
          this.propiedadesParrafo.backgroundColor = 'green';
          break; 
        case 'Dead':
          this.propiedadesParrafo.backgroundColor = 'red';
          break;     
      }

    });      
    
    
  }  

  onClick() {
    this.arrPersonajes = this.arrPosts.find(personajesFound => {
      const nom: string = personajesFound.name;
      console.log(personajesFound.status);
       return personajesFound.name === "Rick Sanchez";
     });        
     
     console.log(this.arrPersonajes.status);
   }

}
