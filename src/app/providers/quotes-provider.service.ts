import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class QuotesProviderService {
    constructor(private http: HttpClient) {
    }

    getQuoteOfTheDay(): Observable<any> {
        return this.http.get('http://quotes.rest/qod.json');
    }
}
