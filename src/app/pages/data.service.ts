import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * CREAMOS INTERFACES DE LOS COMPONENTES QUE TIENEN ATRIBUTOS
 */
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
export interface Post {
  id: number;
  title: string;
  body: string;
}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
//VAMOS A DEFINIR LA URL DE LA API(USAMOS UNA FAKE APP PARA YUMMI DATA)
const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http : HttpClient,
     ){}
  
    getUsers(){
      /**
       * EL NUEVO MODULO DE HTTPCLIENT DEVUELVE LOS OBJETOS EN JSON
       * BY DEFAULT, ASI QUE NO HACE FALTA MAPEAR NADA
       */
      return this.http.get(`${baseUrl}/users`)
    }
    getPosts(){
      return this.http.get(`${baseUrl}/posts`)
    }
    getTodos(){
      return this.http.get(`${baseUrl}/todos`)
    }

}
