import { Component, OnInit, Input } from '@angular/core';
import { IPopularTags } from '../../popularTags/types/popularTags.types';

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  constructor() {}

  @Input('tags') tagsListProps: IPopularTags;

  ngOnInit() {}
}
