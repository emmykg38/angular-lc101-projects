import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   buttonArray: boolean[] = [true, true, true];

   

   constructor() { }

   ngOnInit() { }


   switchButton() {
      for (let i = 0; i < this.buttonArray.length; i++) {
         this.buttonArray[i] = true;
      } return this.buttonArray;
   }




}
