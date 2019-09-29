import { Component, OnInit } from '@angular/core';

// Importo el modelo TASK
import { Task } from '../../models/task';

//Importo el servicio
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  task : Task = { // Lo inicializo a vacio
    'title' : '',
    'description' : ''
  };

  constructor(public taskService : TaskService) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.task.title != '' && this.task.title !=''){
      this.taskService.addTask(this.task);
      this.task.title = '';
      this.task.description = '';
    }
  }

}
