import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.css'],
})
export class TagFeedComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}

  tagName: string;
  apiUrl: string;
  subscribedUrlEvent: Subscription;
  ngOnInit() {
    this.subscribedUrlEvent = this.route.params.subscribe((params: Params) => {
      this.tagName =params['slug']
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
  ngOnDestroy(): void {
    this.subscribedUrlEvent.unsubscribe();
  }
}
