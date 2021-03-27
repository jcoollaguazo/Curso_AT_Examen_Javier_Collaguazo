import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../modelos/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;
  arrPosts: any[];

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://rickandmortyapi.com/api/character'; 
  }

  getAll(): Promise<Personaje[]> {
    return this.http.get<Personaje[]>(this.baseUrl).toPromise();
  }

  getById(id: number): Promise<Personaje> {    
    return this.http.get<any>(`${this.baseUrl}/${id}`).toPromise();    
  }
  
}
