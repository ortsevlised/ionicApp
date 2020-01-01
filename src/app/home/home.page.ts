import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {QuotesProviderService} from '../providers/quotes-provider.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {
    private username: string;
    private qod: {
        quote: string
        author: string
    };

    constructor(private storage: Storage, private qodProvider: QuotesProviderService) {
    }

    ionViewWillEnter() {
        this.storage.get('settings')
            .then((data) => {
                if (data != null) {
                    this.username = data.name;
                }
            });
    }

    ngOnInit() {
        this.qodProvider.getQuoteOfTheDay().subscribe(data => {
            this.qod = data.contents.quotes;
        });
    }
}
