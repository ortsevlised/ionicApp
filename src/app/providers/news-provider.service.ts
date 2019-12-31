import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NewsProviderService {
    private apiKey = 'aa66eef3d6db4d048f113194ea29b76a';

    constructor(private http: HttpClient) {
    }

    getNews(country: string): Observable<any> {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=' + this.apiKey);
    }
}
