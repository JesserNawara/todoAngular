import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('a') inputName:any;
  todos: any = [];
  
  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }
  getTodos(): void {
    this.todoService.getTodos().subscribe((data)=>{
      this.todos = data 
      console.log(this.todos)
    })
  }

  addTodo( text: string ): void {
    this.todoService.addTodo(text).subscribe( data => {
      this.todos.push(data)
      this.inputName.nativeElement.value = ' ';
    })
  }
  
  deleteTodo (id: number): void {
    this.todoService.deleteTodo(id).subscribe( data => {
      this.getTodos()
    }  
    )
  }
  updateTodo (id: number, text: string): void {
    this.todoService.updateTodo(id, text).subscribe( data=>{
      this.getTodos()
    })
  }

}
