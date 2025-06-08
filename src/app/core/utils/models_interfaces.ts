import { SafeHtml } from "@angular/platform-browser";

export type LatestNewsItemType = 'normal' | 'normal-b' | 'normal-p' | 'normal-p-b' | 'title' | 'unorder-list' | 'sub-title' | 'button';

export class LatestNewsItem {
    constructor(
        public type: LatestNewsItemType = 'normal',
        public text: any = '',
        public paddingLeft: string = '',
        public list: Array<any> = []
    ) { }
}
