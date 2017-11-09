import { Component } from '@angular/core';

// Import the DataService
import { DataService } from '../data.service';



export class Task {
    id: number;
    start_date: string;
    text: string;
    progress: number;
    duration: number;
    parent: number;
}