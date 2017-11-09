import { Component } from '@angular/core';
import { DataService } from './data.service';
import {TaskService } from  './services/task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  // Define a users property to hold our user data
  users: Array<any>;
  tasks: Array<any>;
  test: Array<any>;
    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService, private _taskService:TaskService) {

      // test task service
      // this._taskService.get().then((users) => {
        
      //    console.log("usersTest:", users);
       
      //  });
      
      // Access the Data Service's getUsers() method we defined
      this._dataService.getUsers()
          .subscribe(res => this.users = res);

      this._dataService.getTasks()
          .subscribe(res => this.tasks = res);
      
        
      this._dataService.getTest()
          .subscribe(res => this.test = res);
    }

    
}
