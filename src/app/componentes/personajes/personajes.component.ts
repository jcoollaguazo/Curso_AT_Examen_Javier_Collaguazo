import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Personaje } from 'src/app/modelos/personaje.model';
import { PostsService } from 'src/app/servicios/posts.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  arrPosts: any;
  arrPersonajes: any;
  

  constructor(private postsSvc: PostsService) {
    
  }

  ngOnInit() {    
    this.postsSvc.getAll()
      .then(results => this.arrPosts = results['results'])
      .catch(err => console.log(err));        
  }

  async onClickPersonaje(id: number) {
    try{
      const result = await this.postsSvc.getById(id);
      console.log(result);
    } catch (error){
      console.log(error);
    }
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
