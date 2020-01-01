import {Injectable} from '@angular/core';
import {Settings} from './settings.model';
import {BehaviorSubject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    public defaultTitleSize = '18';
    public defaultDescSize = '16';
    public defaultCountry = 'ie';

    private _settings = new BehaviorSubject<Settings>(
        new Settings('', this.defaultCountry, this.defaultTitleSize, this.defaultDescSize));

    get settings() {
        return this._settings.asObservable();
    }

    updateSettings(
        name: string,
        country: string,
        titleFs: string,
        descFs: string
    ) {
        const newSetting = new Settings(
            name,
            country,
            titleFs,
            descFs
        );
        return this._settings.next(newSetting);
    }
}
