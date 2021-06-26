import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      let errorMsg = "";
      if (this.movies.includes(newTitle)) {
         errorMsg = "Oops! You've already chosen that movie title. Please pick a different movie.";
         return errorMsg;
      } 
      
      else if (newTitle === '') {
         errorMsg = "Oops! Please enter a valid movie title. No blanks please ;)";
         return errorMsg;
      }

      else {
         this.movies.push(newTitle);
      }
      
   }

}