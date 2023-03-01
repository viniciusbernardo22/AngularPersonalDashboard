import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabList = [
    { tabName: 'bookmarks', tabClass: 'bookmarks-tab', RouteLink: 'bookmarks' },
    { tabName: 'check', tabClass: 'todo-tab', RouteLink: 'todos' },
    { tabName: 'notes', tabClass: 'notes-tab', RouteLink: 'notes' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
