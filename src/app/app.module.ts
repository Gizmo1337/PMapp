import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import {GanttComponent} from './components/gantt.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { DataService } from './data.service';
import {TaskService } from  './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    GanttComponent
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
