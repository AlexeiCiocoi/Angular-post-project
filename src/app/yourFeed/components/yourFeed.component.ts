import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-your-feed',
  templateUrl: './yourFeed.component.html',
  styleUrls: ['./yourFeed.component.css'],
})
export class YourFeedComponent implements OnInit {
  constructor() {}
  apiUrl = '/articles/feed';
  ngOnInit() {}
}
