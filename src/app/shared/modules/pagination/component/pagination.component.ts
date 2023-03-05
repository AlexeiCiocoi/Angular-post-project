import { UtilsService } from './../../../services/utils.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
    constructor(private utils: UtilsService){}

  @Input('limit') limitProps: number;
  @Input('total') totalCountProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('url') baseUrlProps: string;
  pagesCount: number;
  pages: number[];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalCountProps / this.limitProps);
    this.pages = this.utils.range(1,this.pagesCount)
  }
}
