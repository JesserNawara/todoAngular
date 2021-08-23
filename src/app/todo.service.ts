import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'json' })
  };
  
  constructor(private http: HttpClient) { }
  
  getTodos () {
    return this.http.get("http://localhost:8080/todo")
  }

  addTodo (todo: any) {
    console.log(typeof(todo));
    return this.http.post("http://localhost:8080/todo", {todo})
  } 

  deleteTodo(id: number) {
    return this.http.delete(`http://localhost:8080/todo/${id}`)
  }
  updateTodo(id: number, text: string) {
    return this.http.put(`http://localhost:8080/todo/${id}`, {text})
  }
}
