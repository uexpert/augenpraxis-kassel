import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgZorroAntdModule } from '../../core/ng-zorro-antd/ng-zorro-antd.module';
import { LatestNewsItemComponent } from '../latest-news-item/latest-news-item.component';
import { LatestNewsItem } from '../../core/utils/models_interfaces';

@Component({
  selector: 'latest-news',
  imports: [CommonModule, NgZorroAntdModule, LatestNewsItemComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
  @Input() dataList: Array<LatestNewsItem> = [];
}
