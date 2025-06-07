import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LatestNewsItem } from '../../core/utils/models_interfaces';

@Component({
  selector: 'latest-news-item',
  imports: [CommonModule],
  templateUrl: './latest-news-item.component.html',
  styleUrl: './latest-news-item.component.scss'
})
export class LatestNewsItemComponent {
  @Input() item: LatestNewsItem = new LatestNewsItem();
}
