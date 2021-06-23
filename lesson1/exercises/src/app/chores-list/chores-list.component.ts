import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['Air out old spell books', 'Tend to Fang while Hagrid is out', 'Scrub dishes the muggle way'];

   constructor() { }

   ngOnInit() {
   }

}