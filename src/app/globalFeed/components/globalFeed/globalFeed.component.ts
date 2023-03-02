import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.css'],
})
export class GlobalFeedComponent implements OnInit {
  constructor() {}
  apiUrl = '/articles';
  ngOnInit() {
    
  }
}
