import {Injectable} from '@angular/core';
import {Settings} from './settings.model';
import {BehaviorSubject} from 'rxjs';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private _settings = new BehaviorSubject<Settings>(
        new Settings('aa', 'ie', '3', '3'));

    getStorage(){

    }

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
        this.storage.set('settings', {
            enteredName: name,
            selectedCountry: country,
            selectedTitleFs: titleFs,
            selectedDecFs: descFs
        });
        console.log(newSetting);
        return this._settings.next(newSetting);
    }

    constructor(private storage: Storage) {
    }
}
