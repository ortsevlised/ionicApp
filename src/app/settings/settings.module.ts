import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {SettingsPageRoutingModule} from './settings-routing.module';
import {SettingsPage} from './settings.page';
import {IonicStorageModule} from '@ionic/storage';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        SettingsPageRoutingModule,
        IonicStorageModule,
    ],
    declarations: [SettingsPage]
})
export class SettingsPageModule {
}
