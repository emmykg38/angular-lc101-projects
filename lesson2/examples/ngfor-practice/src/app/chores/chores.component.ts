import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {
         title: "Yesterday's Chores",
         tasks: ['Buy groceries', 'Clean bathroom']
      },
      {
         title: "Today's Chores",
         tasks: ['Work on codergirl homework', 'scrub the toilet', 'call the plumber']
      },
      {
         title: "Tomorrow's Chores",
         tasks: ['laundry', 'deep clean the bathroom', 'sweep the back stairwell']
      }
   ]

   constructor() { }

   ngOnInit() {
   }

}
