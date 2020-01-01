import {Component} from '@angular/core';
import {News} from './news.model';
import {NewsProviderService} from '../providers/news-provider.service';
import {Storage} from '@ionic/storage';
import {SettingsService} from '../settings/settings.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
})
export class NewsPage {
    private news: News[];
    private titleFs;
    private descFs;

    constructor(private newsProvider: NewsProviderService, private storage: Storage, private settings: SettingsService) {}

    ionViewWillEnter() {
        this.storage.get('settings')
            .then((settings) => {
                this.titleFs = settings.titleFs;
                this.descFs = settings.descFs;
                this.newsProvider.getNews(settings.country).subscribe(data => {
                    this.news = data.articles;
                });
            })
            .catch(() => {
                this.titleFs = this.settings.defaultTitleSize;
                this.descFs = this.settings.defaultDescSize;
                this.newsProvider.getNews(this.settings.defaultCountry).subscribe(data => {
                    this.news = data.articles;
                });
            });
    }


}
