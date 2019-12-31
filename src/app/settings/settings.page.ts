import {Component, OnInit} from '@angular/core';
import {SettingsService} from './settings.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
})
export class SettingsPage  {
    private form: FormGroup;
    countries = [
        {id: 'ie', label: 'Ireland'},
        {id: 'us', label: 'United State'},
        {id: 'ca', label: 'Canada'}
    ];

    fontSizes = [
        {value: 1, name: '1', checked: false},
        {value: 2, name: '2', checked: false},
        {value: 3, name: '3', checked: true},
        {value: 4, name: '4', checked: false},
        {value: 5, name: '5', checked: false}
    ];

    constructor(private settingsService: SettingsService, private storage: Storage) {
        this.settingsService.settings.subscribe(loadedSettings =>
            this.form = new FormGroup({
                    name: new FormControl(null, {
                        updateOn: 'blur',
                        validators: [Validators.required]
                    }),
                    country: new FormControl(loadedSettings.country || 'ie', {
                        updateOn: 'blur'
                    }),
                    titleFs: new FormControl(loadedSettings.titleFs || '3', {
                        updateOn: 'submit'
                    }),
                    descFs: new FormControl(loadedSettings.descFs || '3', {
                        updateOn: 'submit'
                    }),
                }
            ));
    }


    onViewWillEnter() {
        console.log('wasda');
        this.settingsService.settings.subscribe();
    }    /*
            ionViewWillEnter() {
                this.settingsService.getSettings.subscribe(

                );
                this.storage.get('settings')
                    .then((data) => {
                        console.log(data);
                        if (data != null) {
                            this.settingsService.updateSettings(
                                data.name,
                                data.country,
                                data.titleFs,
                                data.descFs);
                        }
                    });
            }*/

 onSubmit() {
     this.settingsService.updateSettings(
         this.form.get('name').value,
         this.form.get('country').value,
         this.form.get('titleFs').value,
         this.form.get('descFs').value);
 }
}

/* name: string;
    selectedCountry: string;
    titleFs: number;
    descFs: number;
    form: FormGroup;


    constructor(private storage: Storage) {
    }

    ngOnInit() {
        this.form = new FormGroup({
                name: new FormControl(null, {
                    updateOn: 'blur',
                    validators: [Validators.required]
                }),
                country: new FormControl(this.selectedCountry || 'ie', {
                    updateOn: 'blur'
                }),
                titleFs: new FormControl(this.titleFs || '3', {
                    updateOn: 'submit'
                }),
                descFs: new FormControl(this.descFs || '3', {
                    updateOn: 'submit'
                }),
            }
        );
    }

    ionViewWillEnter() {
        this.storage.get('settings')
            .then((data) => {
                console.log(data);
                if (data != null) {
                    this.name = data.name;
                    this.selectedCountry = data.selectedCountry;
                    this.titleFs = data.titleFs;
                    this.descFs = data.descFs;
                }
            });
        console.log('1' + this.name);
        console.log('2' + this.selectedCountry);
        console.log('3' + this.titleFs);
        console.log('4' + this.titleFs);

    }

   */
