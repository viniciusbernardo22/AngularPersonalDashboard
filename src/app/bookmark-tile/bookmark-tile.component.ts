import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {
  bookmarksList = [
    { id: 1, title: 'Google', imageSrc: 'http://google.com/favicon.ico' },
    { id: 2, title: 'Wikipedia', imageSrc: 'http://wikipedia.org/favicon.ico' },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
