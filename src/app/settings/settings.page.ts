import {Component} from '@angular/core';
import {SettingsService} from './settings.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
})
export class SettingsPage {
    private form: FormGroup;
    countries = [
        {id: 'ie', label: 'Ireland'},
        {id: 'us', label: 'United State'},
        {id: 'ca', label: 'Canada'}
    ];

    fontSizes = [
        {value: 8, name: '1'},
        {value: 12, name: '2'},
        {value: 16, name: '3'},
        {value: 18, name: '4'},
        {value: 20, name: '5'}
    ];

    constructor(private navCtrl: NavController, private settingsService: SettingsService, private storage: Storage) {
        this.settingsService.settings.subscribe(settings =>
            this.form = this.getFormGroup(settings));
    }

    ionViewWillEnter() {
        this.storage.get('settings')
            .then((data) => {
                if (data != null) {
                    this.form = this.getFormGroup(data);
                }
            });
    }

    private getFormGroup(settings) {
        return new FormGroup({
                name: new FormControl(settings.name || '', {
                    updateOn: 'blur',
                    validators: [Validators.required]
                }),
                country: new FormControl(settings.country || 'ie', {
                    updateOn: 'blur'
                }),
                titleFs: new FormControl(settings.titleFs || '4', {
                    updateOn: 'submit'
                }),
                descFs: new FormControl(settings.descFs || '3', {
                    updateOn: 'submit'
                }),
            }
        );
    }

    onSubmit() {
        this.settingsService.updateSettings(
            this.form.get('name').value,
            this.form.get('country').value,
            this.form.get('titleFs').value,
            this.form.get('descFs').value);
        this.storage.set('settings',
            {
                name: this.form.get('name').value,
                country: this.form.get('country').value,
                titleFs: this.form.get('titleFs').value,
                descFs: this.form.get('descFs').value
            });
        this.navCtrl.back();
    }
}



