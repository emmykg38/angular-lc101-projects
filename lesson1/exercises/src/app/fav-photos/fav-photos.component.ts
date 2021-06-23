import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Witches n Wizards';
  image1 = 'http://cdn3.whatculture.com/images/2018/04/644d3e97610adcb4-1200x675.jpg';
  image2 = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/snape-snape.jpg';
  image3 = 'https://www.themarysue.com/wp-content/uploads/2015/09/Hermione-21.jpg';

  constructor() { }

  ngOnInit() {
  }

}