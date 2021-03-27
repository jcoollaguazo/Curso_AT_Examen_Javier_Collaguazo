import { Component } from '@angular/core';
import { PostsService } from './servicios/posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen';
  arrPosts: any[];

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
}
