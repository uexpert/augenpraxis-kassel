import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { NgZorroAntdModule } from '../../core/ng-zorro-antd/ng-zorro-antd.module';
import { LatestNewsItemComponent } from '../latest-news-item/latest-news-item.component';
import { LatestNewsItem } from '../../core/utils/models_interfaces';
import { DomSanitizer } from '@angular/platform-browser';
import _ from 'lodash';

@Component({
  selector: 'latest-news',
  imports: [CommonModule, NgZorroAntdModule, LatestNewsItemComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent implements OnInit {
  @Input() dataList: Array<LatestNewsItem> = [];
  sanitizer = inject(DomSanitizer);
  finalList: Array<any> = [];

  ngOnInit(): void {
    this.onInit();
  }
  
  onInit() {
    this.finalList = [];
    if (this.dataList.length) {
      this.dataList.forEach((item: LatestNewsItem) => {
        let tmp: LatestNewsItem = _.cloneDeep(item);
        if (tmp.type === 'unorder-list' && tmp.list.length) {
          tmp.list.forEach((str: any) => {
            str = str ? this.sanitizer.bypassSecurityTrustHtml(str) : '';
          });
        }
        else {
          tmp.text = tmp.text ? this.sanitizer.bypassSecurityTrustHtml(tmp.text) : '';
        }
        this.finalList.push(tmp);
      });
    }
  }
}
