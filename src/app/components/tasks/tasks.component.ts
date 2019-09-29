import { Component, OnInit } from '@angular/core';

// IMPORTAR EL MODELO
import { Task } from '../../models/task';

// IMPORTAR EL SERVICIO
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[]; // Arreglo para cargar las tareas de firebase

  editState : boolean = false;
  taskToEdit : Task;

  constructor(public taskService : TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks=>{
      console.log(tasks);
      this.tasks = tasks
    })
  }

  deleteTask(event, task: Task){
   if (confirm("Are you sure delete it?")){
      this.taskService.deleteTask(task);
    }
  }

  editTask($event, task){
    this.editState = !this.editState;
    this.taskToEdit = task;
  }

  upateTask(task: Task){
    this.taskService.updateTask(task);
    this.editState = false;
    this.taskToEdit = null;
  }

}
