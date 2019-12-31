import {Component} from '@angular/core';
import {News} from './news.model';
import {NewsProviderService} from '../providers/news-provider.service';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
})
export class NewsPage {
    private news: News[];
    private defaultCountry = 'ie';

    constructor(private newsProvider: NewsProviderService, private storage: Storage) {
    }

    ionViewWillEnter() {
        this.storage.get('settings')
            .then((settings) => {
                this.newsProvider.getNews(settings.country).subscribe(data => {
                    this.news = data.articles;
                });
            })
            .catch(() => {
                this.newsProvider.getNews(this.defaultCountry).subscribe(data => {
                    this.news = data.articles;
                });
            });
    }


}
